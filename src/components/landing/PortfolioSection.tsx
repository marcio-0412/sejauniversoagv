import { motion } from "framer-motion";
import { Repeat } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
            <Repeat size={32} />
          </div>
          <h2 className="headline-lg mb-6">Construa sua carteira de associados</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            Na proteção veicular, o consultor tem a oportunidade de desenvolver uma carteira de associados ao longo do tempo.
          </p>
          <p className="body-md max-w-2xl mx-auto">
            Conforme sua base cresce, é possível construir uma fonte de renda recorrente baseada nas mensalidades.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
