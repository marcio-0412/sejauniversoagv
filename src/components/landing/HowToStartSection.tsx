import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Faça seu cadastro", desc: "Preencha o formulário e inicie o processo." },
  { num: "02", title: "Receba orientação inicial", desc: "Nossa equipe vai te guiar nos primeiros passos." },
  { num: "03", title: "Comece a atuar como consultor", desc: "Use as ferramentas e comece a vender." },
  { num: "04", title: "Construa sua carteira", desc: "Desenvolva sua base de associados e cresça." },
];

const HowToStartSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-16"
        >
          Como começar
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <span className="text-6xl font-black text-primary/10 block mb-2">{step.num}</span>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="body-md text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStartSection;
