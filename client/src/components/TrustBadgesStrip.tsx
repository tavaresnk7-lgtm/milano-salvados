/**
 * DESIGN: Deep Navy Command — Trust Badges Strip
 * Faixa horizontal com 4 badges de confiança
 * Background: rgba(255,255,255,0.04), border-top/bottom: 1px solid rgba(255,255,255,0.08)
 * Texto: #D4A017, fonte Barlow Condensed
 */
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Award, Globe, Zap } from "lucide-react";
import { useRef } from "react";

const badges = [
  { icon: ShieldCheck, label: "100% Compliance Ambiental" },
  { icon: Award, label: "Certificação de Destinação" },
  { icon: Globe, label: "Logística em Todo o Brasil" },
  { icon: Zap, label: "Resposta em até 2 horas" },
];

export default function TrustBadgesStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-8 md:py-10 border-t border-b"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        borderTopColor: "rgba(255,255,255,0.08)",
        borderBottomColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-sm"
                  style={{
                    backgroundColor: "rgba(212, 160, 23, 0.15)",
                    color: "#D4A017",
                  }}
                >
                  <Icon size={20} />
                </div>
                <span
                  className="text-sm md:text-base font-semibold"
                  style={{
                    color: "#D4A017",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.03em",
                  }}
                >
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
