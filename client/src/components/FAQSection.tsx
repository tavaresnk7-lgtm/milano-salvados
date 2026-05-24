/**
 * DESIGN: Deep Navy Command — FAQ Section
 * Animated accordion with collapsible questions and answers
 * Background: #F0F4FA
 */
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O que é logística reversa?",
    answer: "Logística reversa é o processo de retorno de produtos em desuso, danificados ou fora de linha para o fabricante ou distribuidor. A Milano especializa-se em receber, avaliar e dar a destinação correta para esses produtos, transformando um custo de descarte em oportunidade de receita.",
  },
  {
    question: "Quais tipos de produtos vocês compram?",
    answer: "Compramos produtos químicos, domissanitários, têxteis, tintas, cosméticos e matérias primas em geral que estejam em desuso ou fora de linha. Todos os produtos recebem avaliação técnica e são destinados corretamente conforme legislação ambiental.",
  },
  {
    question: "Como funciona o processo de avaliação?",
    answer: "Após o contato inicial, nossa equipe técnica avalia os produtos quanto a quantidade, qualidade, validade e conformidade. Fazemos uma proposta comercial baseada no mercado atual e, se aceita, realizamos a coleta e documentação completa do processo.",
  },
  {
    question: "Vocês possuem todas as licenças necessárias?",
    answer: "Sim! Possuímos todas as licenças regulatórias: ANVISA, IBAMA, Polícia Federal, Exército Brasileiro e Licença Ambiental. Operamos com total conformidade legal e segurança jurídica em todas as operações.",
  },
  {
    question: "Qual é o prazo para coleta dos produtos?",
    answer: "O prazo varia conforme a quantidade e localização. Geralmente realizamos coleta em até 10 dias úteis após a aprovação da proposta. Para casos urgentes, podemos negociar prazos menores.",
  },
  {
    question: "Como é feita a documentação?",
    answer: "Fornecemos documentação completa de toda a operação: nota fiscal, certificado de destinação, comprovante de recebimento e relatório técnico. Tudo conforme exigências legais e normas ambientais.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F0F4FA" }}>
      <div className="section-divider" />

      <div className="container" ref={ref}>
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
            <HelpCircle size={14} />
            Dúvidas Frequentes
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
            PERGUNTAS
            <br />
            <span style={{ color: "#D4A017" }}>FREQUENTES</span>
          </h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="navy-card rounded-sm overflow-hidden"
              style={{ backgroundColor: "#F8F9FB" }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 text-left flex items-start justify-between gap-4 group relative overflow-hidden"
                whileHover={{ backgroundColor: "rgba(212, 160, 23, 0.05)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(212, 160, 23, 0.08) 0%, transparent 70%)",
                  }}
                />

                <h3
                  className="font-bold text-sm leading-snug flex-1 relative z-10"
                  style={{
                    color: "#1A2A4E",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 relative z-10"
                >
                  <ChevronDown size={18} style={{ color: "#D4A017" }} />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{
                        color: "#5A7BA8",
                        fontFamily: "'Inter', sans-serif",
                        borderTop: "1px solid rgba(212, 160, 23, 0.2)",
                        paddingTop: "1rem",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p
            className="mb-6 text-base"
            style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
          >
            Não encontrou sua dúvida? Entre em contato conosco!
          </p>
          <a
            href="#contato"
            onClick={e => { e.preventDefault(); document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-sm btn-gold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", fontSize: "1rem" }}
          >
            FALE CONOSCO
          </a>
        </motion.div>
      </div>
    </section>
  );
}
