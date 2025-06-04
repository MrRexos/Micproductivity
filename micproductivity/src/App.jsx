import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "/src/assets/logo_big.png";


// Minimalistic one‑screen landing page for Mic Productivity
// Inspired by the aesthetic of OpenAI — dark background, restrained color palette, generous spacing.

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-[#f0eeed] px-4 relative overflow-hidden">

      <motion.img
        src={logo}
        alt="MicProductivity"
        className="w-45 sm:w-52 md:w-58 lg:w-64 xl:w-72 2xl:w-80 h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Headline */}
      {/*
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-semibold tracking-tight text-center mb-3 text-[#232323"
        >
          MicProductivity
        </motion.h1>
      */}

      {/* Tagline */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="max-w-xl text-center text-lg md:text-xl mb-10 text-[#9b9c99]"
      >
        Asesoramiento y Gestión de la transformación digital
      </motion.p>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >

        {/* Call to Action (opens PDF) -------------------------------------*/}
        <motion.a
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          href="/docs/portfolio.pdf" // <-- coloca tu PDF en /public/docs
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#232323] text-white text-xs  focus:outline-none focus:ring-4 focus:ring-[#232323]/40"
        >
          PDF
          <ArrowUpRight size={15} strokeWidth={2} />
        </motion.a>

      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-600">
        © {new Date().getFullYear()} MicProductivity. Todos los derechos reservados.
      </footer>
    </div>
  );
}


