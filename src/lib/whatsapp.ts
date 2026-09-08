export const WHATSAPP_NUMBER = '5521975853210';

export function whatsappLink(source: string): string {
  const text = `Olá! Vi o site do Universo AGV (${source}) e gostaria de mais informações para me tornar consultor.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
