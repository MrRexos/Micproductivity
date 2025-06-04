import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "/src/assets/logo_big.png";
import privacyPdf from "/src/assets/PROCEDIMIENTO_Politica_Privacidad_Web_250521[1].pdf";


// Minimalistic one‑screen landing page for Mic Productivity
// Inspired by the aesthetic of OpenAI — dark background, restrained color palette, generous spacing.

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-[#f0eeed] px-4 relative overflow-hidden">

      <Motion.img
        src={logo}
        alt="MicProductivity"
        className="w-100 sm:w-100 md:w-110 lg:w-120 xl:w-130 2xl:w-140 h-auto object-contain"

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
      <Motion.p
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="max-w-xl text-center text-lg md:text-xl mb-10 text-[#9b9c99]"
      >
        Asesoramiento y Gestión de la Transformación Digital
      </Motion.p>

      {/* Call to Action */}
      <Motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >

        {/* Call to Action (opens PDF) -------------------------------------*/}
        <Motion.a
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          href={privacyPdf}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#232323] text-white text-xs  focus:outline-none focus:ring-4 focus:ring-[#232323]/40"
        >
          POLÍTICA DE PRIVACIDAD
          <ArrowUpRight size={15} strokeWidth={2} />
        </Motion.a>

      </Motion.div>

      {/* Footer */}

      <footer className="absolute bottom-4 text-xs text-gray-600 text-center">
        <div>Contacto: info@micproductivity.com</div>
        <div>© {new Date().getFullYear()} MicProductivity. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}


