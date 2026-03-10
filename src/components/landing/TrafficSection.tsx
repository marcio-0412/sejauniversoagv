import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

const TrafficSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 md:p-16 text-center text-primary-foreground"
          style={{ background: "var(--gradient-cta)" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/15 mb-8">
            <Megaphone size={32} />
          </div>
          <h2 className="headline-lg mb-6">Apoio para geração de clientes</h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl mx-auto mb-4">
            O Universo AGV possui uma equipe que auxilia consultores na criação de campanhas de tráfego pago.
          </p>
          <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
            Isso permite gerar clientes online sem necessidade de contratar agências externas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrafficSection;
