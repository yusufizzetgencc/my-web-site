"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-br from-[#fffbe6] to-[#f9f9f9] border-gray-200 border-2 rounded-3xl shadow-lg overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Sol içerik */}
        <motion.div
          className="max-w-2xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#002133] leading-tight mb-6">
            Yazılım benim tutkum, bilgi ise{" "}
            <span className="text-[#ffb900]">paylaştıkça büyür.</span>
          </h1>
          <p className="text-lg text-[#444] mb-8 leading-relaxed">
            Projelerim, blog yazılarım ve yazılımla ilgili her şey burada seni
            bekliyor.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-[#ffb900] text-[#002133] text-lg font-semibold rounded-full shadow-md hover:bg-[#ffde59] transition-all duration-300"
          >
            Hemen Başla
          </Link>
        </motion.div>

        {/* Sağ görsel */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/hero-images2.png"
            alt="freelance illustration"
            width={600}
            height={400}
            className="w-full h-auto object-contain drop-shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
