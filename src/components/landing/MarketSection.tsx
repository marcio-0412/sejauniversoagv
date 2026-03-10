import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const MarketSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
            <TrendingUp size={32} />
          </div>
          <h2 className="headline-lg mb-6">Um mercado em constante crescimento</h2>
          <p className="body-lg max-w-2xl mx-auto mb-4">
            Milhões de brasileiros possuem veículos e buscam formas de proteção.
          </p>
          <p className="body-md max-w-2xl mx-auto mb-4">
            A proteção veicular surge como uma alternativa acessível, ampliando as possibilidades de atendimento para diferentes perfis de clientes.
          </p>
          <p className="body-md max-w-2xl mx-auto font-medium text-foreground">
            Isso cria uma grande oportunidade para consultores comerciais.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
