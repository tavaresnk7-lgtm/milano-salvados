/**
 * DESIGN: Deep Navy Command — Products Section
 * Grid of product cards with icons and hover effects
 * Background: #F8F9FB (main navy)
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Beaker, Shirt, Paintbrush, Sparkles, ArrowRight } from "lucide-react";

const PRODUCTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/products-bg-Q3gh6hnYkN3xasXXGpiuEd.webp";

const products = [
  {
    icon: Beaker,
    title: "Domissanitários",
    description: "Produtos de limpeza e higienização doméstica e industrial. Compramos e comercializamos estoques em desuso com destinação correta e certificada.",
    tags: ["Limpeza", "Higienização", "Industrial"],
  },
  {
    icon: Shirt,
    title: "Têxtil",
    description: "Matérias primas e produtos têxteis em desuso ou fora de linha. Trabalhamos com fibras, tecidos e insumos para a indústria têxtil.",
    tags: ["Fibras", "Tecidos", "Insumos"],
  },
  {
    icon: Paintbrush,
    title: "Tintas",
    description: "Tintas, vernizes e solventes industriais. Realizamos a logística reversa e recolocação no mercado de produtos com validade ou especificações alteradas.",
    tags: ["Tintas", "Vernizes", "Solventes"],
  },
  {
    icon: Sparkles,
    title: "Cosméticos",
    description: "Matérias primas e produtos cosméticos. Compramos estoques de insumos, embalagens e produtos acabados para recolocação ou destinação adequada.",
    tags: ["Matérias Primas", "Embalagens", "Insumos"],
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produtos" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F8F9FB" }}>
      <div className="section-divider" />

      <div className="container" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
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
              Nossos Produtos
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
              SEGMENTOS QUE
              <br />
              <span style={{ color: "#D4A017" }}>ATENDEMOS</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-sm leading-relaxed lg:text-right"
            style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
          >
            Atuamos em múltiplos segmentos da indústria química e de matérias primas, oferecendo soluções completas de logística reversa e recolocação de produtos.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} inView={inView} />
          ))}
        </div>

        {/* Featured image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 relative rounded-sm overflow-hidden"
          style={{ height: "280px" }}
        >
          <img
            src={PRODUCTS_IMG}
            alt="Produtos Milano"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(26,42,78,0.95) 0%, rgba(26,42,78,0.85) 100%)" }}
          >
            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "#FFFFFF",
                  letterSpacing: "0.05em",
                }}
              >
                NA MILANO, SEU PRODUTO EM DESUSO TEM VALOR
              </h3>
              <a
                href="#contato"
                onClick={e => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-sm btn-gold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
              >
                SOLICITAR AVALIAÇÃO
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, index, inView }: { product: typeof products[0]; index: number; inView: boolean }) {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.12, type: "spring", stiffness: 100 }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="navy-card card-hover p-6 rounded-sm flex flex-col relative overflow-hidden group"
    >
      {/* Animated glow background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(212, 160, 23, 0.08) 0%, transparent 70%)",
        }}
      />
      {/* Icon */}
      <motion.div
        className="w-12 h-12 flex items-center justify-center rounded-sm mb-5 relative z-10"
        style={{ backgroundColor: "rgba(212, 160, 23, 0.1)", border: "1px solid rgba(212, 160, 23, 0.2)" }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={22} style={{ color: "#D4A017" }} />
      </motion.div>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "1.3rem",
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: "0.03em",
        }}
      >
        {product.title}
      </h3>

      {/* Description */}
      <p
        className="mb-5 flex-1 text-sm leading-relaxed"
        style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
      >
        {product.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {product.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-xs rounded-sm"
            style={{
              backgroundColor: "rgba(30, 58, 138, 0.3)",
              border: "1px solid rgba(30, 58, 138, 0.4)",
              color: "#5A7BA8",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
