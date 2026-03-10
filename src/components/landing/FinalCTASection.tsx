import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-xl mb-6">
            Comece <span className="text-gradient">agora</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto mb-10">
            Junte-se a milhares de consultores que estão construindo suas carreiras com o Universo AGV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Quero me tornar consultor
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Falar com um gestor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
