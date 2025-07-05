"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="mt-[-55] relative py-20 px-6 sm:px-10 bg-gradient-to-br from-[#fffbe6] to-[#f9f9f9] border-gray-200 border-2 rounded-3xl shadow-lg overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* Sol içerik */}
          <motion.div
            className="max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#002133] leading-tight mb-4">
              Teknolojiyle Güçlen, Bilgiyle Büyü
            </h1>
            <h2 className="text-2xl text-[#444] mb-4">
              Yazılım, Yapay Zeka ve Web Geliştirme Dünyasına Adım At
            </h2>
            <p className="text-lg text-[#444] mb-8 leading-relaxed">
              Eğitim serileri, projeler, trend analizleri ve blog yazılarıyla
              her seviyeden geliştiriciye özel içerikler seni bekliyor.
            </p>
            <Link
              href="/"
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

      <section className="mt-16 px-6 sm:px-10 mb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002133]">
              En Güncel Rehberlerle Bilgiye Ulaş
            </h2>
            <p className="text-[#444] text-lg leading-relaxed">
              HTML, CSS, JavaScript, Yapay Zeka ve daha fazlası hakkında SEO
              uyumlu, güncel ve öğretici içeriklerle gelişimini hızlandır.
            </p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-[#002133] text-white text-base font-medium rounded-full shadow hover:bg-[#001b29] transition-all duration-300"
            >
              Blog Yazılarını Keşfet
            </Link>
          </div>
          <Image
            src="/Blog-images/10.png"
            alt="Bilgi paylaşımı görseli"
            width={500}
            height={350}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
