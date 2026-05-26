/**
 * DESIGN: Deep Navy Command — Milano
 * Navbar: sticky, white background with original logo
 * Nav items: Início, Sobre, Produtos, Licenças, Contato
 * CTA: "Fale Conosco" gold button
 * Hover effects: elaborate animations on links
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/logo_9d96391c.webp";

const navLinks = [
 { label: "Início", href: "/" },
{ label: "Sobre Nós", href: "/sobre" },
{ label: "Produtos", href: "/#produtos" },
{ label: "Como Funciona", href: "/#como-funciona" },
{ label: "Licenças", href: "/#licencas" },
{ label: "FAQ", href: "/#faq" },
{ label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Garantir que o body volta ao normal
    document.body.style.overflow = "auto";
    document.body.style.position = "relative";
    document.documentElement.style.overflow = "auto";
    
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];

if (window.location.pathname !== "/") {
  sessionStorage.setItem("scrollTo", sectionId);
  window.location.href = "/";
  return;
}

const el = document.getElementById(sectionId);

if (el) {
  el.scrollIntoView({ behavior: "smooth" });
}
} else {
  window.location.href = href;
}
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-2 text-xs" style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        <a href="tel:+551159900527" className="flex items-center gap-1.5 transition-colors" style={{ color: "#333333" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#D4A017")}
          onMouseLeave={e => (e.currentTarget.style.color = "#333333")}>
          <Phone size={12} />
          <span>(11) 5990-0527</span>
        </a>
        <a href="mailto:aiman@milanosalvados.com.br" className="flex items-center gap-1.5 transition-colors" style={{ color: "#333333" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#D4A017")}
          onMouseLeave={e => (e.currentTarget.style.color = "#333333")}>
          <Mail size={12} />
          <span>aiman@milanosalvados.com.br</span>
        </a>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-28 md:h-36">
          {/* Logo */}
          <a href="#inicio" onClick={e => { e.preventDefault(); handleNavClick("#inicio"); }} className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Milano"
              className="h-28 md:h-36 w-auto object-contain"
              style={{ filter: "none" }}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-5 py-3 text-base font-medium transition-all duration-300 rounded-sm relative group overflow-hidden"
                style={{ color: "#333333", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em", fontSize: "1rem" }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#D4A017";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "#333333";
                }}
              >
                {/* Background animation */}
                <motion.span
                  className="absolute inset-0 -z-10 rounded-sm"
                  style={{ backgroundColor: "rgba(212, 160, 23, 0.1)" }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-4/5" style={{ backgroundColor: "#D4A017" }} />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              className="relative"
              whileHover="hover"
              initial="rest"
            >
              <motion.a
                href="#contato"
                onClick={e => { e.preventDefault(); handleNavClick("#contato"); }}
                className="relative px-6 py-3 text-base font-bold rounded-sm btn-gold overflow-hidden group"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em", fontSize: "0.95rem" }}
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect background */}
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
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative z-10">FALE CONOSCO</span>
              </motion.a>
              {/* Glow effect on hover */}
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
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-sm transition-colors"
            style={{ color: "#333333" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 pt-16 h-screen overflow-y-scroll"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.98)", 
              backdropFilter: "blur(20px)", 
              WebkitOverflowScrolling: "touch", 
              touchAction: "pan-y",
              overscrollBehavior: "contain",
              overflowY: "auto",

              maxHeight: "100dvh",
              height: "100dvh"
            }}
          >
            <motion.div 
              className="container pt-20 pb-6 flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                  className="py-3 px-4 text-lg font-semibold border-b transition-all rounded-sm"
                  style={{
                    color: "#333333",
                    borderColor: "rgba(0,0,0,0.08)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                  whileHover={{ backgroundColor: "rgba(212, 160, 23, 0.1)", paddingLeft: "1.5rem" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#D4A017";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "#333333";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.3, ease: "easeOut" }}
                onClick={e => { e.preventDefault(); handleNavClick("#contato"); }}
                className="mt-4 py-3 text-center font-bold rounded-sm btn-gold relative overflow-hidden group"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">FALE CONOSCO</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
