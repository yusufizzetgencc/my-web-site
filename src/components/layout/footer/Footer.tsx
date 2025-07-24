"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      className="pt-12 pb-6 px-4 sm:px-10"
      style={{
        background: "linear-gradient(135deg, #1f1f1f 0%, #000000 100%)",
        color: "white",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Marka */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Yusuf İzzet Genç
          </h2>
        </div>

        {/* Hızlı Erişim */}
        <div>
          <h3 className="text-gray-300 font-semibold mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/youtube"
                className="hover:text-white transition-colors"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-gray-300 font-semibold mb-4">Bizi Takip Et</h3>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/coderyusuff?igsh=cndtdWE4eHBvdzU%3D&utm_source=qr"
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="mailto:coderyusuff@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
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
