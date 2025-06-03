import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";


// Minimalistic one‑screen landing page for Mic Productivity
// Inspired by the aesthetic of OpenAI — dark background, restrained color palette, generous spacing.

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-[#f0eeed] px-4 relative overflow-hidden">
      {/* Headline */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="text-5xl md:text-7xl font-semibold tracking-tight text-center mb-6 text-[#232323"
      >
        MicProductivity
      </motion.h1>

      {/* Tagline */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="max-w-xl text-center text-lg md:text-xl mb-10 text-[#9b9c99]"
      >
        Maximiza tu flujo de trabajo con IA en cada clic — potencia, claridad y simplicidad en una sola plataforma.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >
       
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Mic Productivity. Todos los derechos reservados.
      </footer>
    </div>
  );
}


