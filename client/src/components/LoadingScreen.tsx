/**
 * DESIGN: Deep Navy Command — Loading Screen
 * Smooth splash screen with animated logo and progress bar
 * Fades out after initial load
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663560507260/VsMorVZjdUVt3j5Mu6hb2N/logo_9d96391c.webp";

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // Simulate progress with easing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        const increment = Math.random() * 30;
        return Math.min(prev + increment, 90);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      const timer = setTimeout(() => setProgress(0), 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#F8F9FB" }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at center, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={LOGO_URL}
                  alt="Milano"
                  className="h-64 md:h-80 w-auto object-contain"
                  style={{ filter: "none" }}
                />
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: "rgba(212, 160, 23, 0.2)",
                  zIndex: -1,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h2
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "#1A2A4E",
                  letterSpacing: "0.05em",
                }}
              >
                MILANO
              </h2>
              <p
                className="text-xs uppercase tracking-widest"
                style={{
                  color: "#5A7BA8",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                Importação e Exportação
              </p>
              <p
                className="text-sm"
                style={{
                  color: "#5A7BA8",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                Carregando...
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "200px" }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #D4A017, #F0C040, #D4A017)",
                  boxShadow: "0 0 10px rgba(212, 160, 23, 0.5)",
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => {
            const particleStyle = {
              backgroundColor: "rgba(212, 160, 23, 0.3)",
              left: `${50 + (i - 1) * 30}%`,
              top: "50%",
            };
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                style={particleStyle}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
