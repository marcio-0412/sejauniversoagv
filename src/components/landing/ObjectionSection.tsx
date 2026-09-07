import { motion } from "framer-motion";
import { HelpCircle, Check } from "lucide-react";

const answers = [
  "Você mantém sua operação atual e amplia o portfólio com proteção veicular.",
  "Atendimento nacional com preços regionais competitivos para fechar mais negócios.",
  "Estrutura pronta: sistema, aplicativo e páginas de captação, sem custo de desenvolvimento.",
  "Sua carteira continua sendo sua, com receita recorrente das mensalidades.",
];

const ObjectionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
            <HelpCircle size={32} />
          </div>
          <h2 className="headline-lg mb-6">
            "Mas e se eu já tenho uma operação?"
          </h2>
          <p className="body-lg mb-10">
            Ótimo. O Universo AGV foi pensado para somar à sua estrutura, não para substituí-la.
          </p>

          <ul className="space-y-5">
            {answers.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="mt-0.5 shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground">
                  <Check size={16} />
                </span>
                <span className="body-md">{a}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionSection;
