import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev';
const SPREADSHEET_ID = '1sUTouno0BhCK01Ffeu_eBY9A6ntmVLj_tnaja68Sq3w';
const ADMIN_EMAIL = '0412marcio@gmail.com';
const WHATSAPP_NUMBER = '5521975853210';

function response(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function validateBody(body: Record<string, unknown>) {
  const nome = String(body.nome ?? '').trim();
  const telefone = String(body.telefone ?? '').trim();
  const cidade = String(body.cidade ?? '').trim();
  const estado = String(body.estado ?? '').trim();
  const origem = String(body.origem ?? 'Landing Page').trim();

  if (!nome || nome.length < 2) return { error: 'Informe um nome válido.' };
  if (!telefone || telefone.replace(/\D/g, '').length < 10) return { error: 'Informe um telefone válido com DDD.' };
  if (!cidade || cidade.length < 2) return { error: 'Informe uma cidade válida.' };
  if (!estado || estado.length < 2) return { error: 'Informe um estado válido.' };

  return { data: { nome, telefone, cidade, estado, origem } };
}

function base64url(s: string) {
  const bytes = new TextEncoder().encode(s);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function header(v: string) {
  return /^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${base64url(v)}?=`;
}

function buildRawEmail(to: string, subject: string, bodyText: string) {
  const email = [
    `To: ${to}`,
    `Subject: ${header(subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    bodyText,
  ].join('\r\n');
  return base64url(email);
}

async function appendToSheet(
  values: string[],
  apiKey: string,
  connectionKey: string,
) {
  const range = 'Leads!A1:F1';
  const url = `${GATEWAY_URL}/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'X-Connection-Api-Key': connectionKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ values: [values] }),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error('Sheets append failed:', res.status, text);
    throw new Error(`Sheets error ${res.status}: ${text}`);
  }
}

async function sendEmail(
  lead: { nome: string; telefone: string; cidade: string; estado: string; origem: string },
  apiKey: string,
  connectionKey: string,
) {
  const subject = `Novo lead: ${lead.nome} - Universo AGV`;
  const body = [
    `Novo lead capturado no site Universo AGV.`,
    ``,
    `Nome: ${lead.nome}`,
    `Telefone: ${lead.telefone}`,
    `Cidade: ${lead.cidade}`,
    `Estado: ${lead.estado}`,
    `Origem: ${lead.origem}`,
    ``,
    `Link direto para WhatsApp: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá ${lead.nome}, vi seu interesse no Universo AGV. Posso te passar mais informações?`)}`,
  ].join('\n');

  const url = `${GATEWAY_URL}/google_mail/gmail/v1/users/me/messages/send`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'X-Connection-Api-Key': connectionKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: buildRawEmail(ADMIN_EMAIL, subject, body) }),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error('Gmail send failed:', res.status, text);
    throw new Error(`Gmail error ${res.status}: ${text}`);
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return response({ error: 'Method not allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY')!;
  const sheetsKey = Deno.env.get('GOOGLE_SHEETS_API_KEY')!;
  const gmailKey = Deno.env.get('GOOGLE_MAIL_API_KEY')!;

  if (!lovableApiKey || !sheetsKey || !gmailKey) {
    return response({ error: 'Integrações não configuradas.' }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return response({ error: 'Corpo da requisição inválido.' }, 400);
  }

  const validation = validateBody(body);
  if ('error' in validation) return response({ error: validation.error }, 400);
  const lead = validation.data;

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

  try {
    const { error: dbError } = await supabase.from('leads').insert({
      nome: lead.nome,
      telefone: lead.telefone,
      cidade: lead.cidade,
      estado: lead.estado,
      origem: lead.origem,
    });
    if (dbError) throw dbError;

    await appendToSheet([now, lead.nome, lead.telefone, lead.cidade, lead.estado, lead.origem], lovableApiKey, sheetsKey);

    await sendEmail(lead, lovableApiKey, gmailKey);

    return response({ success: true, message: 'Lead registrado com sucesso.' }, 200);
  } catch (err) {
    console.error('submit-lead error:', err);
    const message = err instanceof Error ? err.message : 'Erro interno';
    return response({ error: 'Não foi possível registrar o lead. Tente novamente.', details: message }, 500);
  }
});
