/**
 * DESIGN: Premium Light Professional — Hero Section
 * Full-height hero with background image, animated headline,
 * stats counter, and dual CTA buttons.
 * Text: dark over light background
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, TrendingUp, Package, Award } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/hero-bg-5oFNpmHYo8JcFNW3wcw2aP.webp";

function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const stats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Clientes Atendidos" },
  { icon: Package, value: 98, suffix: "%", label: "Produtos Reciclados" },
  { icon: Award, value: 1988, suffix: "", label: "since" },
];

export default function HeroSection() {
    useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollTo");

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);

        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }

        sessionStorage.removeItem("scrollTo");
      }, 300);
    }
  }, []);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundColor: "#F8F9FB" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(248,249,251,0.88) 0%, rgba(240,244,250,0.82) 50%, rgba(248,249,251,0.90) 100%)",
        }}
      />
      {/* Dots pattern overlay */}
      <div className="absolute inset-0 dots-pattern opacity-10" />

      {/* Content */}
      <div className="relative z-10 container pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-sm text-xs font-semibold tracking-widest uppercase"
            style={{
              border: "1px solid rgba(212, 160, 23, 0.5)",
              backgroundColor: "rgba(212, 160, 23, 0.1)",
              color: "#D4A017",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-gold" style={{ backgroundColor: "#D4A017" }} />
            Comércio · Importação · Exportação
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              letterSpacing: "0.02em",
              color: "#1A2A4E",
              lineHeight: 1,
            }}
          >
            CONVERTEMOS
            <br />
            <span style={{ color: "#D4A017" }}>SUA DESPESA</span>
            <br />
            EM RECEITA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-8 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
          >
            Na Milano, seu produto químico em desuso tem valor. Somos especialistas em logística reversa e comércio de matérias primas, transformando resíduos em oportunidades de negócio.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary CTA Button */}
            <motion.div
              whileHover="hover"
              initial="rest"
              className="relative"
            >
              <motion.a
                href="#contato"
                onClick={e => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-sm btn-gold group relative overflow-hidden"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", fontSize: "1rem" }}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer background */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  variants={{
                    rest: { backgroundPosition: "200% 0" },
                    hover: { backgroundPosition: "-200% 0" }
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  FALE CONOSCO
                  <motion.span
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 4 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </span>
              </motion.a>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(212, 160, 23, 0.5) 0%, transparent 70%)",
                }}
                variants={{
                  rest: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Secondary CTA Button */}
            <motion.div
              whileHover="hover"
              initial="rest"
              className="relative"
            >
              <motion.a
                href="#produtos"
                onClick={e => { e.preventDefault(); document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-sm btn-outline-gold relative overflow-hidden"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", fontSize: "1rem" }}
                variants={{
                  rest: { scale: 1, borderColor: "rgba(212, 160, 23, 0.5)" },
                  hover: { scale: 1.08, borderColor: "rgba(212, 160, 23, 1)" }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Fill effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: "rgba(212, 160, 23, 0.1)",
                  }}
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">VER PRODUTOS</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} visible={statsVisible} index={i} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-70"
        style={{ color: "#5A7BA8" }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          whileHover={{ scale: 1.2, color: "#D4A017" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function StatCard({ stat, visible, index }: { stat: typeof stats[0]; visible: boolean; index: number }) {
  const count = useCounter(stat.value, 2000, visible);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      className="text-center"
    >
      <div className="flex justify-center mb-2">
        <Icon size={20} style={{ color: "#D4A017" }} />
      </div>
      <div
        className="font-bold leading-none mb-1"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "#1A2A4E",
        }}
      >
        {count}{stat.suffix}
      </div>
      <div
        className="text-xs uppercase tracking-wider"
        style={{ color: "#5A7BA8", fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}
