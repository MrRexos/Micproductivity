import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "/src/assets/logo_big.png";
import privacyPdf from "/src/assets/PROCEDIMIENTO_Politica_Privacidad_Web_250521[1].pdf";
import prosciLogo from "/src/assets/prosci.png";
import pmiLogo from "/src/assets/pmi.png";
import prince2Logo from "/src/assets/prince2.png";
import psmLogo from "/src/assets/psmI.png";
import xLogo from "/src/assets/XLogo.png";
import linkedinLogo from "/src/assets/linkedinLogo.png";

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
        className="max-w-2xl text-center text-lg md:text-xl mb-10 text-[#9b9c99]"
      >
        Transformando la manera de trabajar de las organizaciones a través de la gestión del cambio y la adopción de herramientas tecnológicas
      </Motion.p>

      {/* Call to Action */}
      <Motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >

        {/* Call to Action (opens PDF) -------------------------------------*/}
        {/*  <Motion.a
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
        </Motion.a> */}

      </Motion.div>

      {/* Certificaciones */}
      <Motion.section
        className="w-full mt-14  py-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-center text-sm md:text-base font-medium text-gray-500 mb-4">Certificaciones</h3>
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            <img src={prosciLogo} alt="Prosci" className="h-20 md:h-24 object-contain" />
            <img src={pmiLogo} alt="PMI" className="h-12 md:h-15  object-contain" />
            <img src={prince2Logo} alt="PRINCE2" className="h-12 md:h-15  object-contain" />
            <img src={psmLogo} alt="PSM I" className="h-14 md:h-22 object-contain" />
          </div>
        </div>
      </Motion.section>

      {/* Footer */}

      <footer className="absolute bottom-4 text-xs text-gray-600 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <img src={xLogo} alt="X" className="h-5 w-5 object-contain" />
          <img src={linkedinLogo} alt="LinkedIn" className="h-5 w-5 object-contain" />
        </div>
        <div className="flex items-center justify-center gap-1">Contacto: info@micproductivity.com •{" "}
          <a
            href={privacyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="underline inline-flex items-center gap-1"
          >
            Política de privacidad <ArrowUpRight size={15} strokeWidth={2} />
          </a>
        </div>
        <div>© {new Date().getFullYear()} MICProductivity. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}


