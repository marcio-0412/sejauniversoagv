import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo_2.png";
import { whatsappLink } from "@/lib/whatsapp";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("authority")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-narrow text-center px-6">
        <motion.img
          src={logo}
          alt="Universo AGV"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-16 sm:h-20 mx-auto mb-10 object-contain"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="headline-xl max-w-4xl mx-auto mb-6"
        >
          Uma das maiores associações de proteção veicular do Brasil está expandindo sua rede de consultores.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="body-lg max-w-3xl mx-auto mb-4"
        >
          Trabalhe com o Universo AGV e faça parte de uma operação que já protegeu mais de 1 milhão de veículos em todo o país.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="body-md max-w-2xl mx-auto mb-10"
        >
          Estamos buscando consultores comerciais, corretores de seguros e profissionais de vendas que desejam atuar em um mercado em constante crescimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary">
            Quero saber como me tornar consultor
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Falar com um gestor no WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll para baixo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
