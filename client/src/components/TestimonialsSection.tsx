/**
 * DESIGN: Deep Navy Command — Testimonials Section
 * Background: #F8F9FB
 * Cards with gold star ratings and colored avatars
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ótima empresa. Estava com problema com alguns produtos no meu galpão, ao invés de mandarmos para incinerar vendemos para Milano e resolvemos o problema.",
    author: "Fernanda Silva",
    role: "Compradora Industrial",
    initials: "FS",
    bgColor: "#D4A017",
  },
  {
    quote: "Nós pesquisamos empresas para logística reversa e o melhor custo benefício foi a Milano. Atendimento excelente e processo muito transparente.",
    author: "Puyanha Oliveira",
    role: "Compradora",
    initials: "PO",
    bgColor: "#6B8FD4",
  },
  {
    quote: "Processo rápido e eficiente. A Milano nos ajudou a dar destinação correta para produtos químicos que estavam parados há meses no nosso estoque.",
    author: "Carlos Eduardo",
    role: "Gerente de Operações",
    initials: "CE",
    bgColor: "#4A9D6F",
  },
  {
    quote: "Empresa séria e comprometida. Cumpriram todos os prazos e a documentação foi impecável. Recomendo para qualquer empresa que precise de logística reversa.",
    author: "Mariana Costa",
    role: "Diretora de Compras",
    initials: "MC",
    bgColor: "#D97706",
  },
  {
    quote: "Excelente atendimento e profissionalismo. A Milano transformou um problema de estoque em oportunidade de negócio. Muito satisfeito com o resultado.",
    author: "Roberto Mendes",
    role: "Diretor Executivo",
    initials: "RM",
    bgColor: "#8B5CF6",
  },
  {
    quote: "Parceria confiável e duradoura. Já trabalhamos com a Milano há mais de 3 anos e nunca tivemos problemas. Recomendo fortemente!",
    author: "Juliana Ferreira",
    role: "Gerente de Logística",
    initials: "JF",
    bgColor: "#EC4899",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F8F9FB" }}>
      <div className="section-divider" />

      {/* Background pattern */}
      <div className="absolute inset-0 dots-pattern opacity-10" />

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
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
            Depoimentos
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
            O QUE NOSSOS
            <br />
            <span style={{ color: "#D4A017" }}>CLIENTES DIZEM</span>
          </h2>
        </motion.div>

        {/* Testimonials grid - 3 columns on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="navy-card card-hover p-7 rounded-sm relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(212, 160, 23, 0.06) 0%, transparent 70%)",
                }}
              />
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0.1 }}
                whileHover={{ opacity: 0.25, scale: 1.1 }}
                className="absolute top-5 right-5 relative z-0"
              >
                <Quote
                  size={32}
                  style={{ color: "#D4A017" }}
                />
              </motion.div>

              {/* Stars */}
              <motion.div className="flex gap-0.5 mb-4 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Star size={14} fill="#D4A017" style={{ color: "#D4A017" }} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote text */}
              <blockquote
                className="mb-6 leading-relaxed relative z-10"
                style={{
                  color: "#1A2A4E",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    backgroundColor: testimonial.bgColor,
                    color: "#FFFFFF",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {testimonial.initials}
                </motion.div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "#1A2A4E", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.03em" }}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
