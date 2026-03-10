import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Consultor há 3 anos",
    text: "Entrei no Universo AGV sem experiência e hoje tenho uma carteira sólida de associados. A estrutura que a associação oferece fez toda a diferença na minha carreira.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Gestora regional",
    text: "Comecei como consultora e em dois anos me tornei gestora regional. O plano de carreira é real e o suporte da equipe é excepcional.",
  },
  {
    name: "Roberto Silva",
    role: "Consultor há 5 anos",
    text: "A renda recorrente mudou minha vida financeira. Construí uma carteira de mais de 500 associados e hoje tenho estabilidade e crescimento constante.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-16"
        >
          O que dizem nossos consultores
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 text-center relative"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-8">
            <Quote size={24} />
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto">
              "{testimonials[current].text}"
            </p>
            <p className="font-semibold text-lg">{testimonials[current].name}</p>
            <p className="body-md text-sm">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
