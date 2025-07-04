"use client";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function AboutIntro() {
  return (
    <section className="w-full bg-[#0F172A] rounded-2xl p-2 flex justify-center">
      {/* Profil Fotoğrafı */}
      <div className="max-w-6xl w-full rounded-2xl shadow-2xl  border-[#1e293b] border-1 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 bg-[#1e293b]/60 backdrop-blur-md relative">
        <div className="w-[220px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-[#ffde59]">
          <Image
            src="/images/admin-foto.jpeg"
            alt="Profil Fotoğrafı"
            width={220}
            height={220}
            sizes="(max-width: 768px) 100vw, 220px"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Metin Alanı */}
        <div className="text-white flex-1 relative">
          <h2 className="text-4xl font-bold text-[#ffde59] mb-4">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Merhaba, ben{" "}
            <span className="text-[#38BDF8] font-semibold">Yusuf İzzet</span>.
            Yazılım geliştirme dünyasına tutkuyla bağlı bir geliştiriciyim.
            Kullanıcı deneyimini önemseyen, performanslı ve modern web
            uygulamaları geliştiriyorum. Frontend’den başlayıp backend tarafında
            güçlü mimariler kurarak projeleri uçtan uca yönetebiliyorum. Amacım;
            sürdürülebilir, okunabilir ve etkili dijital çözümler üretmek.
          </p>

          {/* Teknoloji Kaydırıcısı */}
          <div className="absolute bottom-[-60] right-[-30] mt-6 w-56 overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-4 animate-slide-horizontal-lg w-max px-4 py-2 bg-[#1E293B] rounded-lg shadow-inner">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex gap-4 text-xl">
                  <FaHtml5 className="text-orange-500 hover:scale-125 transition duration-300" />
                  <FaCss3Alt className="text-blue-500 hover:scale-125 transition duration-300" />
                  <FaJsSquare className="text-yellow-300 hover:scale-125 transition duration-300" />
                  <SiTypescript className="text-blue-400 hover:scale-125 transition duration-300" />
                  <FaReact className="text-cyan-400 hover:scale-125 transition duration-300" />
                  <SiNextdotjs className="text-white hover:scale-125 transition duration-300" />
                  <SiTailwindcss className="text-teal-300 hover:scale-125 transition duration-300" />
                  <FaNodeJs className="text-green-500 hover:scale-125 transition duration-300" />
                  <FaGithub className="text-gray-300 hover:scale-125 transition duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
