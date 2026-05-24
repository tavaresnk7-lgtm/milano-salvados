/**
 * DESIGN: Deep Navy Command — Contact Section
 * Background: #F0F4FA
 * Split: contact info left, form right
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    residueType: "",
    estimatedVolume: "",
    volumeUnit: "toneladas",
    frequency: "",
    requirements: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate form submission - in production, connect to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would send data to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setSubmitted(true);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", company: "", email: "", phone: "", product: "", residueType: "", estimatedVolume: "", volumeUnit: "toneladas", frequency: "", requirements: "", message: "" });
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.");
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#1A2A4E",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    color: "#5A7BA8",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "0.8rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
  };

  return (
    <section id="contato" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#F0F4FA" }}>
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
            Entre em Contato
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
            VAMOS TRABALHAR
            <br />
            <span style={{ color: "#D4A017" }}>JUNTOS</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="mb-8 leading-relaxed"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
            >
              Possui produtos químicos, domissanitários, têxteis, tintas ou cosméticos em desuso? Entre em contato conosco e descubra como transformar seu passivo em receita.
            </p>

            <div className="space-y-5">
              <ContactItem
                icon={Phone}
                label="Telefone"
                value="(11) 5990-0527"
                href="tel:+551159900527"
                inView={inView}
                delay={0.3}
              />
              <ContactItem
                icon={Mail}
                label="E-mail"
                value="aiman@milanosalvados.com.br"
                href="mailto:aiman@milanosalvados.com.br"
                inView={inView}
                delay={0.4}
              />
              <ContactItem
                icon={MapPin}
                label="Localização"
                value="Rua Feita, 651 — Suzano, SP"
                href="#"
                inView={inView}
                delay={0.5}
              />
            </div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <p
                className="mb-3 text-xs uppercase tracking-widest"
                style={{ color: "#5A7BA8", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Redes Sociais
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/milanosalvados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-sm transition-all"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#5A7BA8",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#D4A017";
                    (e.currentTarget as HTMLElement).style.color = "#D4A017";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#5A7BA8";
                  }}
                >
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 rounded-sm overflow-hidden relative"
              style={{ height: "200px", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt!2sbr!4v1620000000000"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="Localização Milano"
              />
              <div className="absolute top-2 left-2 z-10">
                <a
                  href="https://maps.app.goo.gl/WnvVKaSUfCfZrK149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: "rgba(10, 22, 40, 0.9)",
                    color: "#4A9FFF",
                    border: "1px solid rgba(74, 159, 255, 0.5)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(10, 22, 40, 1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 159, 255, 1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(10, 22, 40, 0.9)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 159, 255, 0.5)";
                  }}
                >
                  <span>🗺️</span>
                  Abrir no Maps
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-7 rounded-sm"
            style={{ backgroundColor: "#F8F9FB", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={48} style={{ color: "#D4A017" }} className="mb-4" />
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#1A2A4E", letterSpacing: "0.05em" }}
                >
                  MENSAGEM ENVIADA!
                </h3>
                <p style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
                  Entraremos em contato em breve. Obrigado pelo interesse na Milano.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="mb-6"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#1A2A4E",
                    letterSpacing: "0.03em",
                  }}
                >
                  Envie sua mensagem
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Nome *</label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Empresa</label>
                      <input
                        type="text"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle} className="block mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Telefone</label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle} className="block mb-1.5">Tipo de Resíduo *</label>
                    <select
                      required
                      value={formData.residueType}
                      onChange={e => setFormData({ ...formData, residueType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm"
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ backgroundColor: "#F8F9FB" }}>Selecione o tipo de resíduo</option>
                      <option value="quimicos" style={{ backgroundColor: "#F8F9FB" }}>Químicos Controlados</option>
                      <option value="textil" style={{ backgroundColor: "#F8F9FB" }}>Têxtil e Vestuário</option>
                      <option value="tintas" style={{ backgroundColor: "#F8F9FB" }}>Tintas e Vernizes</option>
                      <option value="cosmeticos" style={{ backgroundColor: "#F8F9FB" }}>Cosméticos</option>
                      <option value="domissanitarios" style={{ backgroundColor: "#F8F9FB" }}>Domissanitários</option>
                      <option value="eletronico" style={{ backgroundColor: "#F8F9FB" }}>Eletrônico</option>
                      <option value="outros" style={{ backgroundColor: "#F8F9FB" }}>Outros</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Volume Estimado *</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.1"
                        placeholder="Ex: 500"
                        value={formData.estimatedVolume}
                        onChange={e => setFormData({ ...formData, estimatedVolume: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm"
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} className="block mb-1.5">Unidade *</label>
                      <select
                        required
                        value={formData.volumeUnit}
                        onChange={e => setFormData({ ...formData, volumeUnit: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-sm"
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      >
                        <option value="toneladas" style={{ backgroundColor: "#F8F9FB" }}>Toneladas</option>
                        <option value="quilos" style={{ backgroundColor: "#F8F9FB" }}>Quilos</option>
                        <option value="litros" style={{ backgroundColor: "#F8F9FB" }}>Litros</option>
                        <option value="unidades" style={{ backgroundColor: "#F8F9FB" }}>Unidades</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle} className="block mb-1.5">Frequência de Geração</label>
                    <select
                      value={formData.frequency}
                      onChange={e => setFormData({ ...formData, frequency: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm"
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ backgroundColor: "#F8F9FB" }}>Selecione a frequência</option>
                      <option value="diaria" style={{ backgroundColor: "#F8F9FB" }}>Diária</option>
                      <option value="semanal" style={{ backgroundColor: "#F8F9FB" }}>Semanal</option>
                      <option value="mensal" style={{ backgroundColor: "#F8F9FB" }}>Mensal</option>
                      <option value="trimestral" style={{ backgroundColor: "#F8F9FB" }}>Trimestral</option>
                      <option value="anual" style={{ backgroundColor: "#F8F9FB" }}>Anual</option>
                      <option value="pontual" style={{ backgroundColor: "#F8F9FB" }}>Pontual</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle} className="block mb-1.5">Requisitos Especiais</label>
                    <textarea
                      placeholder="Ex: Necessário transporte refrigerado, documentação específica, etc."
                      value={formData.requirements}
                      onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-2.5 rounded-sm resize-none"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <div>
                    <label style={labelStyle} className="block mb-1.5">Informações Adicionais</label>
                    <textarea
                      placeholder="Descreva detalhes adicionais sobre o resíduo, composição, estado, etc."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-sm resize-none"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-sm"
                      style={{ backgroundColor: "rgba(220, 38, 38, 0.1)", border: "1px solid rgba(220, 38, 38, 0.3)" }}
                    >
                      <AlertCircle size={16} style={{ color: "#DC2626" }} />
                      <span style={{ color: "#DC2626", fontSize: "0.875rem" }}>{error}</span>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    className="relative"
                  >
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full relative flex items-center justify-center gap-2 py-3.5 font-bold rounded-sm btn-gold disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", fontSize: "1rem" }}
                      variants={{
                        rest: { scale: 1 },
                        hover: loading ? {} : { scale: 1.05 }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {!loading && (
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
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <Send size={16} />
                            </motion.div>
                            ENVIANDO...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            ENVIAR MENSAGEM
                          </>
                        )}
                      </span>
                    </motion.button>
                    {!loading && (
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
                    )}
                  </motion.div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  inView,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="flex items-start gap-3 p-3 rounded-sm transition-all group"
      style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(212, 160, 23, 0.08)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
      }}
    >
      <Icon size={20} style={{ color: "#D4A017", flexShrink: 0, marginTop: "2px" }} />
      <div>
        <div
          className="text-xs uppercase tracking-widest mb-1"
          style={{ color: "#5A7BA8", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {label}
        </div>
        <div
          className="font-semibold group-hover:text-yellow-400 transition-colors"
          style={{ color: "#1A2A4E", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
        >
          {value}
        </div>
      </div>
    </motion.a>
  );
}
