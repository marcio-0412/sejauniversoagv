import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Users, MapPin, Briefcase, DollarSign, TrendingUp, Clock } from "lucide-react";

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const AnimatedNumber = ({ target, prefix = "", suffix = "" }: { target: string; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target.replace(/\./g, ""));
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        const formatted = Math.floor(current).toLocaleString("pt-BR");
        setDisplay(formatted);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

const StatCard = ({ icon, value, label, delay }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numMatch = value.match(/[\d.]+/);
  const prefix = value.match(/^[^\d]*/)?.[0] || "";
  const suffix = value.match(/[^\d.]*$/)?.[0] || "";
  const numPart = numMatch?.[0] || "0";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-6"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-4">
        {icon}
      </div>
      <div className="stat-number mb-2">
        <AnimatedNumber target={numPart} prefix={prefix} suffix={suffix} />
      </div>
      <p className="body-md">{label}</p>
    </motion.div>
  );
};

const stats = [
  { icon: <Shield size={28} />, value: "+1.000.000", label: "Veículos protegidos" },
  { icon: <Users size={28} />, value: "+400.000", label: "Associados" },
  { icon: <MapPin size={28} />, value: "+500", label: "Regionais" },
  { icon: <Briefcase size={28} />, value: "+10.000", label: "Consultores" },
  { icon: <DollarSign size={28} />, value: "R$5 bi", label: "Pagos em indenizações" },
  { icon: <TrendingUp size={28} />, value: "+20.000", label: "Novos associados/mês" },
  { icon: <Clock size={28} />, value: "+10", label: "Anos de atuação" },
];

const AuthoritySection = () => {
  return (
    <section id="authority" className="section-padding bg-background">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-16"
        >
          Números que <span className="text-gradient">falam por si</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
