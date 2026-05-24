/**
 * DESIGN: Deep Navy Command — Stats Strip Redesign
 * Visual integrado ao fundo dark, sem card branco
 * Números uniformes, separadores dourados, tipografia consistente
 * Animações: hover (scale, glow), mobile (toque), entrada (cascata)
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const stats = [
  { number: "38", label: "Anos de Mercado", sublabel: "desde 1988" },
  { number: "100%", label: "Atuação Nacional" },
  { number: "+500", label: "Parceiros Industriais" },
  { number: "1000+", label: "Toneladas Movimentadas" },
];

export default function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#F8F9FB",
        borderTop: "1px solid rgba(212, 160, 23, 0.15)",
        borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        padding: "48px 0",
      }}
    >
      <div className="container mx-auto px-4">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(i)}
              onTouchEnd={() => setHoveredIndex(null)}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRight: i < stats.length - 1
                  ? "1px solid rgba(212, 160, 23, 0.2)"
                  : "none",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease-out",
              }}
            >
              {/* Glow effect no hover */}
              {hoveredIndex === i && (
                <motion.div
                  layoutId={`glow-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%)",
                    borderRadius: "4px",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Número */}
              <motion.div
                animate={hoveredIndex === i ? { scale: 1.15, color: "#FFD700" } : { scale: 1, color: "#D4A017" }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 5vw, 4rem)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  marginBottom: "10px",
                  textShadow: hoveredIndex === i ? "0 0 20px rgba(212, 160, 23, 0.6)" : "none",
                }}
              >
                {stat.number}
              </motion.div>

              {/* Linha decorativa */}
              <motion.div
                animate={hoveredIndex === i ? { width: "48px", backgroundColor: "rgba(212, 160, 23, 0.8)" } : { width: "32px", backgroundColor: "rgba(212, 160, 23, 0.4)" }}
                transition={{ duration: 0.3 }}
                style={{
                  height: "2px",
                  margin: "0 auto 10px",
                }}
              />

              {/* Label */}
              <motion.div
                animate={hoveredIndex === i ? { color: "#D4A017" } : { color: "#5A7BA8" }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </motion.div>
              {stat.sublabel && (
                <motion.div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#5A7BA8",
                    marginTop: "4px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.sublabel}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
