/**
 * DESIGN: Deep Navy Command — CTA Banner
 * Banner de largura total, fundo #D4A017
 * Título em azul escuro, dois botões lado a lado com animações sofisticadas
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#D4A017" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#F8F9FB",
              letterSpacing: "0.02em",
            }}
          >
            PARE DE PERDER DINHEIRO COM MATERIAL PARADO
          </h2>

          <p
            className="mb-10 text-lg"
            style={{
              color: "#F8F9FB",
              fontFamily: "'Inter', sans-serif",
              opacity: 0.9,
            }}
          >
            Solicite uma avaliação técnica gratuita e descubra como transformar seus resíduos em receita
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button */}
            <motion.div
              whileHover="hover"
              initial="rest"
              className="relative"
            >
              <motion.button
                onClick={() => handleScroll("#contato")}
                className="relative px-8 py-3 rounded-sm font-bold overflow-hidden"
                style={{
                  backgroundColor: "#F8F9FB",
                  color: "#D4A017",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.05em",
                  fontSize: "0.95rem",
                }}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  variants={{
                    rest: { backgroundPosition: "200% 0" },
                    hover: { backgroundPosition: "-200% 0" }
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <span className="relative z-10">GARANTIR AVALIAÇÃO GRATUITA</span>
              </motion.button>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(212, 160, 23, 0.4) 0%, transparent 70%)",
                }}
                variants={{
                  rest: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              whileHover="hover"
              initial="rest"
              className="relative"
            >
              <motion.button
                onClick={() => handleScroll("#contato")}
                className="relative px-8 py-3 rounded-sm font-bold overflow-hidden"
                style={{
                  backgroundColor: "transparent",
                  color: "#F8F9FB",
                  border: "2px solid #F8F9FB",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.05em",
                  fontSize: "0.95rem",
                }}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Fill effect */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: "rgba(10, 22, 40, 0.15)",
                  }}
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">FALAR COM ESPECIALISTA</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
