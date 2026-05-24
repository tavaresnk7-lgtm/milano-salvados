/**
 * DESIGN: Deep Navy Command — WhatsApp Floating Button
 * Fixed position button with pulse animation
 * Appears on scroll, smooth interaction
 */
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "5511599900000"; // Replace with actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá%20Milano!%20Gostaria%20de%20mais%20informações.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl group"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 12px 40px rgba(37, 211, 102, 0.6), 0 0 0 0 rgba(37, 211, 102, 0.4)",
      }}
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse animation background - two concentric circles */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
        transition={{ duration: 2.3, repeat: Infinity, delay: 0.2 }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10"
        whileHover={{ rotate: 15, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <MessageCircle size={28} color="white" fill="white" />
      </motion.div>

      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute right-full mr-4 px-4 py-2 rounded-sm text-xs font-semibold whitespace-nowrap pointer-events-none"
        style={{
          backgroundColor: "#F8F9FB",
          color: "#D4A017",
          border: "1px solid rgba(212, 160, 23, 0.3)",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.05em",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        Fale com nossos especialistas
      </motion.div>
    </motion.a>
  );
}
