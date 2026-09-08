import { motion } from "framer-motion";
import { User, MapPin, UsersRound, Network } from "lucide-react";

const steps = [
  { icon: <User size={24} />, title: "Consultor", desc: "Inicie sua jornada como consultor comercial com toda a estrutura da operação." },
  { icon: <UsersRound size={24} />, title: "Líder", desc: "Lidere e desenvolva novos consultores dentro da sua equipe." },
  { icon: <MapPin size={24} />, title: "Gestor regional", desc: "Gerencie uma região e escale resultados com apoio da matriz." },
  { icon: <Network size={24} />, title: "Expansão", desc: "Expanda sua operação para novas regiões e amplie sua rede." },
];

const CareerSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-16"
        >
          Plano de <span className="text-gradient">crescimento</span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative px-4"
            >
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="body-md text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
