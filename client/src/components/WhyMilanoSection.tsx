/**
 * DESIGN: Deep Navy Command — Why Milano Section
 * Grid 2x2 com 4 diferenciais com animações sofisticadas
 * Fundo: #F0F4FA, ícone com círculo, hover muda o círculo para #D4A017
 * ANIMATIONS: Full motion design with stagger, hover effects, and floating elements
 */
import { motion, useInView } from "framer-motion";
import { Users, BarChart3, Shield, CheckCircle } from "lucide-react";
import { useRef } from "react";

const differentials = [
  { icon: Users, title: "Expertise B2B", description: "Experiência consolidada em negócios entre empresas" },
  { icon: BarChart3, title: "Maximização de Lucro", description: "Melhor retorno financeiro para seus resíduos" },
  { icon: Shield, title: "Risco Zero", description: "Conformidade total com regulamentações ambientais" },
  { icon: CheckCircle, title: "Agilidade Extrema", description: "Respostas rápidas e processos otimizados" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 100 },
  },
};

export default function WhyMilanoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 overflow-hidden relative" style={{ backgroundColor: "#F0F4FA" }}>
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10"
        style={{ background: "#D4A017" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-10"
        style={{ background: "#D4A017" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-sm"
            style={{
              border: "1px solid rgba(212, 160, 23, 0.3)",
              backgroundColor: "rgba(212, 160, 23, 0.06)",
              color: "#D4A017",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Por que Milano
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="leading-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#1A2A4E",
              letterSpacing: "0.02em",
            }}
          >
            NOSSOS
            <br />
            <motion.span 
              style={{ color: "#D4A017", display: "inline-block" }}
              animate={{ color: ["#D4A017", "#FFD700", "#D4A017"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              DIFERENCIAIS
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {differentials.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="flex gap-6 p-6 rounded-sm transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(212, 160, 23, 0.15)",
                  }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(212, 160, 23, 0.15)",
                    backgroundColor: "rgba(212, 160, 23, 0.02)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Icon circle with animations */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-sm transition-all duration-300 relative"
                    style={{
                      backgroundColor: "rgba(212, 160, 23, 0.1)",
                    }}
                    whileHover={{
                      backgroundColor: "rgba(212, 160, 23, 0.25)",
                    }}
                  >
                    {/* Animated background pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-sm"
                      style={{
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.3) 0%, transparent 70%)",
                        opacity: 0,
                      }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />

                    {/* Icon with rotation on hover */}
                    <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ type: "spring" as const, stiffness: 200 }}
                    >
                      <Icon size={28} style={{ color: "#D4A017" }} />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="mb-2 font-bold"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "1.2rem",
                        color: "#1A2A4E",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {diff.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="text-sm leading-relaxed"
                      style={{
                        color: "#5A7BA8",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {diff.description}
                    </motion.p>
                  </div>

                  {/* Floating accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ background: "#D4A017", width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
