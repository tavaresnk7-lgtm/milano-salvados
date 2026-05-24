/**
 * DESIGN: Deep Navy Command — How It Works Section
 * 4 etapas em linha horizontal com ícones e conectores animados
 * Fundo: #F8F9FB, conectores: linha pontilhada dourada
 * Cada card com borda rgba(212,160,23,0.2) e hover glow
 */
import { motion, useInView } from "framer-motion";
import { Search, ClipboardCheck, Truck, RefreshCw } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Search, title: "Identificação", description: "Análise inicial do material" },
  { icon: ClipboardCheck, title: "Avaliação Técnica", description: "Verificação de conformidade" },
  { icon: Truck, title: "Coleta e Logística", description: "Transporte seguro" },
  { icon: RefreshCw, title: "Reintegração", description: "Reprocessamento e venda" },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F8F9FB" }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase rounded-sm"
            style={{
              border: "1px solid rgba(212, 160, 23, 0.3)",
              backgroundColor: "rgba(212, 160, 23, 0.06)",
              color: "#D4A017",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Nosso Processo
          </div>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#1A2A4E",
              letterSpacing: "0.02em",
            }}
          >
            COMO
            <br />
            <span style={{ color: "#D4A017" }}>FUNCIONA</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {/* Mobile vertical connector */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-0.5"
            style={{
              backgroundImage: "linear-gradient(to bottom, #D4A017 0%, #D4A017 50%, transparent 50%, transparent 100%)",
              backgroundSize: "2px 8px",
              backgroundPosition: "0 0",
              backgroundRepeat: "repeat-y",
            }}
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group md:ml-0 ml-12"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-60px)] h-0.5"
                    style={{
                      backgroundImage: "linear-gradient(to right, #D4A017 0%, #D4A017 50%, transparent 50%, transparent 100%)",
                      backgroundSize: "8px 2px",
                      backgroundPosition: "0 0",
                      backgroundRepeat: "repeat-x",
                    }}
                  />
                )}

                {/* Card */}
                <div
                  className="p-6 md:p-8 rounded-sm transition-all duration-300 relative z-10"
                  style={{
                    backgroundColor: "#F0F4FA",
                    border: "1px solid rgba(212, 160, 23, 0.2)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 160, 23, 0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(212, 160, 23, 0.2)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212, 160, 23, 0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Step number */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm mb-4"
                    style={{
                      backgroundColor: "rgba(212, 160, 23, 0.15)",
                      color: "#D4A017",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4" style={{ color: "#D4A017" }}>
                    <Icon size={32} />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2 font-bold"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1.1rem",
                      color: "#1A2A4E",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm"
                    style={{
                      color: "#5A7BA8",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
