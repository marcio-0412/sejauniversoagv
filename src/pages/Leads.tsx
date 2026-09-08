import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, LogOut, Phone, MapPin, Calendar, Search, Filter, Trash2 } from "lucide-react";

type Lead = {
  id: string;
  nome: string;
  telefone: string;
  cidade: string;
  estado: string;
  origem: string;
  status: string;
  observacoes: string | null;
  created_at: string;
};

const statusOptions = ["novo", "em contato", "convertido", "descartado"];

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/login?returnTo=/leads");
    });
  }, [navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setLeads(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) console.error(error);
    else setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const updateNotes = async (id: string, observacoes: string) => {
    const { error } = await supabase.from("leads").update({ observacoes }).eq("id", id);
    if (error) console.error(error);
    else setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, observacoes } : l)));
  };

  const removeLead = async (id: string) => {
    if (!confirm("Tem certeza que deseja remover este lead?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) console.error(error);
    else setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const filtered = leads.filter((l) => {
    const matchesText = [l.nome, l.telefone, l.cidade, l.estado]
      .join(" ")
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesStatus = statusFilter === "todos" || l.status === statusFilter;
    return matchesText && matchesStatus;
  });

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-20">
        <div className="container-wide flex items-center justify-between py-4 px-6">
          <h1 className="headline-md text-xl">Central de leads</h1>
          <button onClick={logout} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <LogOut size={18} /> Sair
          </button>
        </div>
      </header>

      <section className="container-wide py-8 px-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Buscar por nome, telefone, cidade..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="inline-flex items-center gap-2">
            <Filter size={18} className="text-muted-foreground" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="todos">Todos os status</option>
              {statusOptions.map((s) => (
                <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum lead encontrado.
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map((lead, i) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="glass-card p-5 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{lead.nome}</h3>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium uppercase tracking-wide">
                        {lead.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Phone size={14} /> {lead.telefone}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} /> {lead.cidade}, {lead.estado}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} /> {formatDate(lead.created_at)}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mb-3">Origem: {lead.origem}</div>
                    <textarea
                      value={lead.observacoes ?? ""}
                      onChange={(e) => updateNotes(lead.id, e.target.value)}
                      placeholder="Observações internas..."
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      rows={2}
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:items-end">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className="px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      {statusOptions.map((s) => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeLead(lead.id)}
                      className="inline-flex items-center gap-1.5 text-sm text-destructive hover:opacity-80"
                    >
                      <Trash2 size={16} /> Remover
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Leads;
