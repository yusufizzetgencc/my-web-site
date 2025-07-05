"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-[#001a29] text-white pt-12 pb-6 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Marka */}
        <div>
          <h2 className="text-2xl font-bold text-[#ffb900] mb-4">
            Yusuf İzzet Genç
          </h2>
        </div>

        {/* Hızlı Erişim */}
        <div>
          <h3 className="text-[#ffde59] font-semibold mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#ffb900]">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ffb900]">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#ffb900]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/youtube" className="hover:text-[#ffb900]">
                YouTube
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-[#ffde59] font-semibold mb-4">Bizi Takip Et</h3>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/coderyusuff?igsh=cndtdWE4eHBvdzU%3D&utm_source=qr"
              target="_blank"
              className="hover:text-[#ffb900]"
            >
              <Instagram size={20} />
            </Link>
            <Link href="coderyusuff@gmail.com" className="hover:text-[#ffb900]">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt bilgi */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        © {currentYear} Yusuf İzzet Genç. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
