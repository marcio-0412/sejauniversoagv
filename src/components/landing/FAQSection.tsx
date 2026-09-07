import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso de experiência para começar?",
    a: "Não. Muitos consultores começam sem experiência no setor e recebem treinamento e acompanhamento da equipe desde o início.",
  },
  {
    q: "Existe custo para me tornar consultor?",
    a: "As condições de entrada são apresentadas pela equipe durante a conversa inicial, junto com todo o material e as ferramentas disponíveis.",
  },
  {
    q: "Posso atuar em qualquer região do Brasil?",
    a: "Sim. A atuação é nacional, com preços regionais competitivos e apoio de gestores em diversas regiões.",
  },
  {
    q: "Como funciona a remuneração?",
    a: "O consultor recebe pelas vendas realizadas e constrói uma carteira de associados que pode gerar renda recorrente com as mensalidades.",
  },
  {
    q: "Posso conciliar com a minha atividade atual?",
    a: "Sim. Muitos corretores e vendedores atuam com proteção veicular como complemento ao portfólio que já oferecem.",
  },
  {
    q: "Que tipo de suporte eu recebo?",
    a: "Sistema de gestão, aplicativo de cotação, páginas de captação, treinamentos e apoio para campanhas de tráfego pago.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-16"
        >
          Perguntas frequentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="body-md text-sm md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
