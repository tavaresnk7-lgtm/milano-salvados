/**
 * DESIGN: Deep Navy Command — Footer
 * Background: #060E1A (darkest navy)
 * Logo, links, contact info, copyright
 */
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ArrowUp } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/logo_9d96391c.webp";

const footerLinks = {
  empresa: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Nossos Produtos", href: "#produtos" },
    { label: "Licenças", href: "#licencas" },
    { label: "Depoimentos", href: "#depoimentos" },
  ],
  produtos: [
    { label: "Domissanitários", href: "#produtos" },
    { label: "Têxtil", href: "#produtos" },
    { label: "Tintas", href: "#produtos" },
    { label: "Cosméticos", href: "#produtos" },
  ],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#060E1A", borderTop: "1px solid rgba(212, 160, 23, 0.15)" }}>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#inicio" onClick={e => { e.preventDefault(); handleNavClick("#inicio"); }}>
              <img
                src={LOGO_URL}
                alt="Milano"
                className="h-32 md:h-40 w-auto object-contain mb-5"
                style={{ filter: "invert(1) brightness(2) saturate(0)" }}
              />
            </a>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
            >
              Comércio, Importação e Exportação de Matérias Primas. Especialistas em logística reversa e produtos químicos controlados.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/milanosalvados"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-sm transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#5A7BA8" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#D4A017";
                  (e.currentTarget as HTMLElement).style.color = "#D4A017";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "#5A7BA8";
                }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#D4A017", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#1A2A4E")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#5A7BA8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#D4A017", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Produtos
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.produtos.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors"
                    style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#1A2A4E")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#5A7BA8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#D4A017", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+551159900527"
                className="flex items-center gap-2.5 text-sm transition-colors"
                style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1A2A4E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#5A7BA8")}
              >
                <Phone size={14} style={{ color: "#D4A017", flexShrink: 0 }} />
                (11) 5990-0527
              </a>
              <a
                href="mailto:aiman@milanosalvados.com.br"
                className="flex items-center gap-2.5 text-sm transition-colors"
                style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1A2A4E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#5A7BA8")}
              >
                <Mail size={14} style={{ color: "#D4A017", flexShrink: 0 }} />
                aiman@milanosalvados.com.br
              </a>
              <a
                href="https://maps.app.goo.gl/WnvVKaSUfCfZrK149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors mt-2.5"
                style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1A2A4E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#5A7BA8")}
              >
                <span style={{ color: "#D4A017", flexShrink: 0 }}>📍</span>
                Abrir no Maps
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p
                className="text-xs uppercase tracking-wider mb-3"
                style={{ color: "#5A7BA8", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Receba nossas novidades
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 text-xs rounded-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#1A2A4E",
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                  }}
                  onFocus={e => (e.target.style.borderColor = "rgba(212, 160, 23, 0.4)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
                <button
                  className="px-3 py-2 rounded-sm btn-gold text-xs font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Milano. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span
              className="text-xs"
              style={{ color: "#5A7BA8", fontFamily: "'Inter', sans-serif" }}
            >
              CNPJ: 58.748.245/0001-81
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center rounded-sm transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#5A7BA8" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#D4A017";
                (e.currentTarget as HTMLElement).style.color = "#D4A017";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#5A7BA8";
              }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
