import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ExpansionSection = () => {
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
            <MapPin size={32} />
          </div>
          <h2 className="headline-lg mb-6">Expansão da rede de consultores</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            O Universo AGV está expandindo sua rede de consultores em diversas regiões do Brasil.
          </p>
          <p className="body-md max-w-2xl mx-auto mb-10">
            Algumas regiões ainda possuem alto potencial de crescimento, criando oportunidades para novos consultores desenvolverem sua carteira de associados.
          </p>
          <a href="#contact" className="btn-primary">
            Quero atuar na minha região
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpansionSection;
