import { motion } from "framer-motion";
import { User, UsersRound, Crown, Briefcase } from "lucide-react";

const profiles = [
  {
    icon: <User size={26} />,
    title: "Consultor",
    desc: "Quer começar no mercado de proteção veicular com estrutura e apoio desde o primeiro dia.",
  },
  {
    icon: <UsersRound size={26} />,
    title: "Gestor",
    desc: "Deseja montar e conduzir uma equipe comercial na sua região.",
  },
  {
    icon: <Crown size={26} />,
    title: "Líder",
    desc: "Já lidera pessoas e busca uma operação sólida para escalar resultados.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Profissional do mercado",
    desc: "Corretor ou vendedor que quer ampliar o portfólio e atender mais perfis de clientes.",
  },
];

const IdentificationSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-4"
        >
          Para quem é o <span className="text-gradient">Universo AGV</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="body-lg text-center mb-16 max-w-2xl mx-auto"
        >
          Encontre o seu perfil e veja onde você pode chegar dentro da nossa rede.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-5">
                {p.icon}
              </div>
              <h3 className="headline-md text-lg mb-2">{p.title}</h3>
              <p className="body-md text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
