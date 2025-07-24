"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiBookOpen, FiYoutube, FiInstagram } from "react-icons/fi";

const NavbarPage = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const underlineSpanClasses =
    "relative text-sm after:block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100";

  const menuItems = (
    <>
      <Link href="/about" onClick={() => setIsMenuOpen(false)}>
        <div
          className={`group flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
            pathname === "/about"
              ? "text-white font-semibold"
              : "text-gray-400 group-hover:text-white"
          }`}
        >
          <FiUser className="text-lg" />
          <span className={underlineSpanClasses}>Hakkımda</span>
        </div>
      </Link>
      <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
        <div
          className={`group flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
            pathname === "/blog"
              ? "text-white font-semibold"
              : "text-gray-400 group-hover:text-white"
          }`}
        >
          <FiBookOpen className="text-lg" />
          <span className={underlineSpanClasses}>Blog</span>
        </div>
      </Link>
      <Link href="/youtube" onClick={() => setIsMenuOpen(false)}>
        <div
          className={`group flex items-center gap-1 cursor-pointer transition-colors duration-300 ${
            pathname === "/youtube"
              ? "text-white font-semibold"
              : "text-gray-400 group-hover:text-white"
          }`}
        >
          <FiYoutube className="text-lg" />
          <span className={underlineSpanClasses}>YouTube</span>
        </div>
      </Link>
      <a
        href="https://www.instagram.com/coderyusuff/?igsh=cndtdWE4eHBvdzU%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="group flex items-center gap-1 cursor-pointer text-gray-400 hover:text-white transition-colors duration-300">
          <FiInstagram className="text-lg" />
          <span className={underlineSpanClasses}>Instagram</span>
        </div>
      </a>
    </>
  );

  return (
    <nav className="w-full px-4 py-2 bg-transparent relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center w-full">
          <button
            ref={buttonRef}
            className="md:hidden flex flex-col gap-[4px] text-gray-400 ml-auto"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Mobil Menü Aç/Kapat"
          >
            <span className="w-6 h-[2px] bg-gray-400 rounded"></span>
            <span className="w-6 h-[2px] bg-gray-400 rounded"></span>
            <span className="w-6 h-[2px] bg-gray-400 rounded"></span>
          </button>
          <div className="w-full flex justify-end">
            {/* Sağdaki menu arka planı saydam ve cam efektiyle */}
            <div className="hidden md:flex items-center gap-8 rounded-lg px-6 py-2 shadow-md">
              {menuItems}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-black bg-opacity-60 backdrop-blur-md rounded-b-lg shadow-lg p-6 flex flex-col gap-4 z-50 md:hidden"
        >
          {menuItems}
        </div>
      )}
    </nav>
  );
};

export default NavbarPage;
