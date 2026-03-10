import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", cidade: "", estado: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <h2 className="headline-lg text-center mb-4">Receba mais informações</h2>
          <p className="body-md text-center mb-10">
            Preencha seus dados e nossa equipe entrará em contato.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <Send size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dados enviados!</h3>
              <p className="body-md">Entraremos em contato em breve.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "nome", label: "Nome", type: "text", placeholder: "Seu nome completo" },
                { key: "telefone", label: "Telefone", type: "tel", placeholder: "(00) 00000-0000" },
                { key: "cidade", label: "Cidade", type: "text", placeholder: "Sua cidade" },
                { key: "estado", label: "Estado", type: "text", placeholder: "Seu estado" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  />
                </div>
              ))}
              <button type="submit" className="btn-primary w-full">
                Receber mais informações
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
