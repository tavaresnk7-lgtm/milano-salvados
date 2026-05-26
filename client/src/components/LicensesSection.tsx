/**
 * DESIGN: Deep Navy Command — Licenses Section
 * Background: #F0F4FA with sustainability image
 * Showcases regulatory compliance and certifications
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, FileText, Award, Building2, Leaf, Lock } from "lucide-react";

const SUSTAINABILITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/sustainability-bg-ZrsGAxCQs59nw82aWFeCRq.webp";

const licenses = [
  {
    icon: ShieldCheck,
    title: "Produtos Químicos Controlados",
    description: "Licença para exercer atividade não eventual com produtos químicos sujeitos a controle e fiscalização pelos órgãos competentes.",
  },
  {
    icon: FileText,
    title: "ANVISA",
    description: "Autorização da Agência Nacional de Vigilância Sanitária para comercialização de domissanitários e cosméticos.",
  },
  {
    icon: Award,
    title: "IBAMA",
    description: "Cadastro e autorização do Instituto Brasileiro do Meio Ambiente para atividades de logística reversa de produtos químicos.",
  },
  {
    icon: Building2,
    title: "Polícia Federal",
    description: "Cadastro junto à Polícia Federal para produtos químicos controlados, conforme legislação vigente.",
  },
  {
    icon: Leaf,
    title: "Licença Ambiental",
    description: "Licença de operação para atividades de armazenamento, transporte e destinação de resíduos industriais.",
  },
  {
    icon: Lock,
    title: "Exército Brasileiro",
    description: "Certificado de Registro no Exército Brasileiro para produtos com controle especial de segurança nacional.",
  },
];

export default function LicensesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="licencas" className="relative py-10 md:py-24 overflow-hidden" style={{ backgroundColor: "#F0F4FA" }}>
      <div className="section-divider" />

      <div className="container" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end mb-14">
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
              Conformidade Regulatória
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
              NOSSAS
              <br />
              <span style={{ color: "#D4A017" }}>LICENÇAS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
            >
              As <strong style={{ color: "#1A2A4E" }}>Licenças para Produtos Químicos Controlados</strong> permitem que a Milano exerça atividade não eventual com produtos químicos sujeitos a controle e fiscalização, assim como pessoa física que desenvolva atividade na área rural.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
            >
              Operamos com total conformidade legal, garantindo segurança jurídica e ambiental em todas as operações de logística reversa e comercialização de matérias primas.
            </p>
          </motion.div>
        </div>

        {/* Licenses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {licenses.map((license, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="navy-card card-hover p-5 rounded-sm relative overflow-hidden group"
              style={{ backgroundColor: "#F8F9FB" }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(212, 160, 23, 0.06) 0%, transparent 70%)",
                }}
              />
              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
                  style={{ backgroundColor: "rgba(212, 160, 23, 0.1)", border: "1px solid rgba(212, 160, 23, 0.2)" }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <license.icon size={18} style={{ color: "#D4A017" }} />
                </motion.div>
                <div>
                  <h3
                    className="mb-1.5"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#1A2A4E",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {license.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                  >
                    {license.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sustainability text banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center justify-center text-center p-8 py-16"
        >
          <h3
            className="mb-3"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#1A2A4E",
                letterSpacing: "0.05em",
            }}
          >
            LOGÍSTICA REVERSA COM
            <span style={{ color: "#D4A017" }}> RESPONSABILIDADE AMBIENTAL</span>
          </h3>
          <p
            className="max-w-lg text-sm"
            style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
          >
            Todas as nossas operações seguem rigorosos padrões ambientais e regulatórios, garantindo a destinação correta de cada produto.
          </p>
        </motion.div>

        {/* Licenses badges section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pt-12 border-t border-opacity-20"
          style={{ borderColor: "rgba(212, 160, 23, 0.2)" }}
        >
          <h3
            className="text-center mb-10"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#1A2A4E",
              letterSpacing: "0.03em",
            }}
          >
            CERTIFICAÇÕES E AUTORIZAÇÕES
          </h3>
          <div className="w-full flex justify-center px-4 md:px-10">
            <motion.img
              src="/licenças.png"
              alt="Certificações e Autorizações Milano"
              className="w-full max-w-full md:max-w-5xl h-auto rounded-2xl"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))", minHeight: "300px" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
