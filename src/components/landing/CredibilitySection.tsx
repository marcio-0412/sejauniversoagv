import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
            <ShieldCheck size={32} />
          </div>
          <h2 className="headline-lg mb-6">Credibilidade e regulamentação</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            As associações de proteção veicular atuam de forma regulamentada, com registro junto à SUSEP, garantindo transparência e segurança para associados e consultores.
          </p>
          <p className="body-md max-w-2xl mx-auto">
            O setor de proteção veicular é reconhecido como uma alternativa legítima e acessível ao seguro tradicional, atendendo milhões de brasileiros em todo o país.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;
