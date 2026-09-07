import { motion } from "framer-motion";
import { Smartphone, Globe, Settings, Map, GraduationCap, Headphones } from "lucide-react";

const features = [
  {
    icon: <Settings size={28} />,
    title: "Sistema de gestão",
    description: "Sistema completo para gerenciar sua carteira de associados.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "App do consultor",
    description: "Aplicativo para cotação online com agilidade e praticidade.",
  },
  {
    icon: <Globe size={28} />,
    title: "Landing pages",
    description: "Páginas otimizadas para captação de leads qualificados.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Treinamento",
    description: "Capacitação comercial contínua, do básico ao avançado.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Suporte",
    description: "Acompanhamento próximo da equipe e dos gestores regionais.",
  },
  {
    icon: <Map size={28} />,
    title: "Atuação nacional",
    description: "Atue em todo o Brasil com preços regionais competitivos.",
  },
];


const StructureSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-4"
        >
          Estrutura completa para o consultor
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="body-lg text-center mb-16 max-w-2xl mx-auto"
        >
          Ferramentas profissionais para você focar no que importa: vender.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-5">
                {f.icon}
              </div>
              <h3 className="headline-md text-lg mb-2">{f.title}</h3>
              <p className="body-md text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
