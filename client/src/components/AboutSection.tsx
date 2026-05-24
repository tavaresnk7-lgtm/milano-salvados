/**
 * DESIGN: Deep Navy Command — About Section
 * Split layout: image left, content right
 * Background: slightly lighter navy (#F0F4FA)
 * Text: light over dark
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Recycle, Globe, Shield } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/about-section-VyVzYJcuXQAc6wof28XaJM.webp";

const highlights = [
  { icon: Recycle, text: "Especialistas em logística reversa de produtos químicos" },
  { icon: Globe, text: "Comércio nacional e internacional de matérias primas" },
  { icon: Shield, text: "Todas as licenças e certificações regulatórias em dia" },
  { icon: CheckCircle2, text: "Destinação correta e ambientalmente responsável" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F0F4FA" }}>
      {/* Subtle top divider */}
      <div className="section-divider mb-0" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={ABOUT_IMG}
                alt="Instalações Milano"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.3) 0%, transparent 60%)" }} />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 p-5 rounded-sm shadow-2xl"
              style={{ backgroundColor: "#F8F9FB", border: "1px solid rgba(212, 160, 23, 0.3)" }}
            >
              <div className="text-center">
                <div
                  className="font-bold leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", color: "#D4A017" }}
                >
                  38
                </div>
                <div
                  className="text-xs uppercase tracking-wider mt-1"
                  style={{ color: "#5A7BA8", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Anos no Mercado
                </div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, #D4A017 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold tracking-widest uppercase rounded-sm"
              style={{
                border: "1px solid rgba(212, 160, 23, 0.3)",
                backgroundColor: "rgba(212, 160, 23, 0.06)",
                color: "#D4A017",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              Sobre Nós
            </div>

            <h2
              className="mb-4 leading-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#1A2A4E",
                letterSpacing: "0.02em",
              }}
            >
              PODEREMOS REVERTER
              <br />
              <span style={{ color: "#D4A017" }}>SUA DESPESA EM RECEITA</span>
            </h2>

            <p
              className="mb-6 leading-relaxed"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
            >
              A Milano é uma empresa especializada no comércio, importação e exportação de matérias primas. Atuamos no segmento de logística reversa, oferecendo soluções inteligentes para empresas que possuem produtos químicos, domissanitários, têxteis, tintas e cosméticos em desuso.
            </p>

            <p
              className="mb-8 leading-relaxed"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
            >
              Transformamos o que seria um custo de descarte em uma oportunidade de receita, garantindo a destinação correta e ambientalmente responsável dos materiais.
            </p>

            {/* Highlights */}
            <div className="grid gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <item.icon size={18} style={{ color: "#D4A017", flexShrink: 0 }} />
                  <span style={{ color: "#1A2A4E", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8"
            >
              <a
                href="#contato"
                onClick={e => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-sm btn-gold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
              >
                ENTRE EM CONTATO
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
