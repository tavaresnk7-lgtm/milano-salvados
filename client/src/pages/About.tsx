/**
 * DESIGN: Premium Light — About Page
 * Complete company story with history, mission, vision, values, operations
 * Paleta: #F8F9FB (fundo), #1A2A4E (títulos), #5A7BA8 (texto), #D4A017 (acentos)
 * ANIMATIONS: Full motion design on all elements
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Zap, Users, Award, Beaker, Shirt, Paintbrush, Sparkles } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const values = [
    {
      icon: Target,
      title: "Excelência",
      description: "Comprometidos com os mais altos padrões de qualidade em cada operação.",
    },
    {
      icon: Heart,
      title: "Sustentabilidade",
      description: "Transformando resíduos em oportunidades de negócio responsável.",
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Soluções criativas para logística reversa e comércio de matérias primas.",
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Parcerias duradouras baseadas em transparência e integridade.",
    },
  ];

  const timeline = [
    {
      year: "1988",
      title: "Fundação",
      description: "Milano é fundada com foco em logística reversa e comércio de matérias primas.",
    },
    {
      year: "2008",
      title: "Expansão",
      description: "Obtemos certificações ANVISA, IBAMA e Polícia Federal, expandindo operações.",
    },
    {
      year: "2018",
      title: "Crescimento",
      description: "Parceria com principais indústrias de domissanitários, têxtil, tintas e cosméticos.",
    },
    {
      year: "2023",
      title: "Liderança",
      description: "Consolidação como referência em logística reversa e comércio sustentável.",
    },
  ];

  const operations = [
    {
      title: "Domissanitários",
      desc: "Produtos de limpeza e higienização doméstica e industrial com destinação certificada",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/gallery-chemicals-TN4EyqviaJRvYDknFmVW3j.webp",
    },
    {
      title: "Têxtil e Vestuário",
      desc: "Logística reversa de tecidos e materiais têxteis em desuso, reaproveitamento sustentável",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/gallery-textile-dxmsjedZ8X8scgNGMidRzs.webp",
    },
    {
      title: "Tintas e Vernizes",
      desc: "Recebimento e processamento de tintas em desuso com conformidade ambiental",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/gallery-paint-MxPwYqXSR7LYenXaTfJzz3.webp",
    },
    {
      title: "Cosméticos",
      desc: "Matérias primas e produtos cosméticos para recolocação ou destinação adequada",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/gallery-quality-Lv3iZ8KVJfwLettt8zEMwG.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FB" }}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle at center, rgba(212, 160, 23, 0.15) 0%, transparent 70%)",
          }} 
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-sm"
              style={{
                border: "1px solid rgba(212, 160, 23, 0.3)",
                backgroundColor: "rgba(212, 160, 23, 0.06)",
                color: "#D4A017",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              Nossa História
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="leading-tight mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#1A2A4E",
                letterSpacing: "0.02em",
              }}
            >
              CONHECA A
              <br />
              <motion.span 
                style={{ color: "#D4A017", display: "inline-block" }}
                animate={{ color: ["#D4A017", "#FFD700", "#D4A017"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MILANO
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-relaxed"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
            >
              Especialistas em logística reversa e comércio de matérias primas. Transformamos resíduos em oportunidades de negócio sustentável e responsável.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 border-t" style={{ borderColor: "rgba(212, 160, 23, 0.15)" }} ref={ref}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(212, 160, 23, 0.15)"
              }}
              className="p-8 rounded-sm cursor-pointer transition-all"
              style={{ 
                backgroundColor: "#FFFFFF", 
                border: "1px solid rgba(212, 160, 23, 0.2)",
                borderRadius: "8px"
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Target size={32} style={{ color: "#D4A017", marginBottom: "1rem" }} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  color: "#1A2A4E",
                  letterSpacing: "0.05em",
                }}
              >
                NOSSA MISSÃO
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="leading-relaxed"
                style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
              >
                Ser a principal referência em logística reversa e comércio de matérias primas, oferecendo soluções inovadoras e sustentáveis que transformam resíduos em oportunidades de negócio responsável.
              </motion.p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(212, 160, 23, 0.15)"
              }}
              className="p-8 rounded-sm cursor-pointer transition-all"
              style={{ 
                backgroundColor: "#FFFFFF", 
                border: "1px solid rgba(212, 160, 23, 0.2)",
                borderRadius: "8px"
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              >
                <Eye size={32} style={{ color: "#D4A017", marginBottom: "1rem" }} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="mb-4"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  color: "#1A2A4E",
                  letterSpacing: "0.05em",
                }}
              >
                NOSSA VISÃO
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="leading-relaxed"
                style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
              >
                Consolidar a Milano como líder em sustentabilidade empresarial, impactando positivamente o meio ambiente e gerando valor para todos os stakeholders.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-t" style={{ borderColor: "rgba(212, 160, 23, 0.15)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#1A2A4E",
                letterSpacing: "0.02em",
              }}
            >
              NOSSOS
              <br />
              <span style={{ color: "#D4A017" }}>VALORES</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-sm text-center"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(212, 160, 23, 0.2)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                    className="flex justify-center mb-4"
                  >
                    <Icon size={32} style={{ color: "#D4A017" }} />
                  </motion.div>
                  <h3
                    className="mb-2 font-bold"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.3rem",
                      color: "#1A2A4E",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-20 md:py-28 border-t" style={{ borderColor: "rgba(212, 160, 23, 0.15)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#1A2A4E",
                letterSpacing: "0.02em",
              }}
            >
              NOSSA
              <br />
              <span style={{ color: "#D4A017" }}>OPERAÇÃO</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-sm overflow-hidden cursor-pointer group"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(212, 160, 23, 0.2)",
                  height: "280px",
                }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-gray-200">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(26,42,78,0.8) 0%, rgba(26,42,78,0.6) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between h-32">
                  <h3
                    className="font-bold text-sm mb-2"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1rem",
                      color: "#1A2A4E",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 border-t" style={{ borderColor: "rgba(212, 160, 23, 0.15)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#1A2A4E",
                letterSpacing: "0.02em",
              }}
            >
              NOSSA
              <br />
              <span style={{ color: "#D4A017" }}>JORNADA</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-12 top-0 bottom-0 w-1"
              style={{
                background: "linear-gradient(180deg, #C9A84C 0%, #D4A017 50%, #C9A84C 100%)",
                boxShadow: "0 0 8px rgba(212, 160, 23, 0.4)",
              }}
            />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="mb-12 flex gap-8 items-start relative"
              >
                {/* Year circle - positioned on the line */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="flex-shrink-0 relative z-10"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl border-4"
                    style={{
                      backgroundColor: "#D4A017",
                      color: "#FFFFFF",
                      fontFamily: "'Bebas Neue', sans-serif",
                      borderColor: "#F8F9FB",
                      boxShadow: "0 0 12px rgba(212, 160, 23, 0.5)",
                      marginLeft: "-56px",
                    }}
                  >
                    {item.year}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex-1 p-6 rounded-sm mt-3"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(212, 160, 23, 0.2)",
                  }}
                >
                  <h3
                    className="mb-2 font-bold"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.5rem",
                      color: "#1A2A4E",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 border-t border-b" style={{ borderColor: "rgba(212, 160, 23, 0.15)", backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "38", label: "Anos de Experiência" },
              { number: "100%", label: "Atuação Nacional" },
              { number: "+500", label: "Parceiros Industriais" },
              { number: "1000+", label: "Toneladas Movimentadas" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: "#D4A017",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.number}
                </div>
                <p
                  className="text-sm uppercase tracking-wider"
                  style={{ color: "#5A7BA8", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
