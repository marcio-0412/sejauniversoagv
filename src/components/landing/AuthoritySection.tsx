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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 p-4 sm:p-5"
    >
      <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xl sm:text-2xl font-semibold tracking-tight leading-none mb-1">
          <AnimatedNumber target={numPart} prefix={prefix} suffix={suffix} />
        </div>
        <p className="body-md text-xs sm:text-sm leading-snug">{label}</p>
      </div>
    </motion.div>
  );
};

const stats = [
  { icon: <Users size={20} />, value: "+400.000", label: "Associados" },
  { icon: <Shield size={20} />, value: "+1.000.000", label: "Veículos protegidos" },
  { icon: <Briefcase size={20} />, value: "+10.000", label: "Consultores" },
  { icon: <MapPin size={20} />, value: "+500", label: "Regionais" },
  { icon: <Clock size={20} />, value: "+10", label: "Anos de atuação" },
  { icon: <DollarSign size={20} />, value: "R$5 bi", label: "Pagos em indenizações" },
  { icon: <TrendingUp size={20} />, value: "+20.000", label: "Novos associados/mês" },
];

const AuthoritySection = () => {
  return (
    <section id="authority" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-lg text-center mb-10"
        >
          Números que <span className="text-gradient">falam por si</span>
        </motion.h2>
        <div className="glass-card overflow-hidden grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-border/60">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 0.07} />
          ))}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};


export default AuthoritySection;
