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

  const menuItems = (
    <>
      <Link href="/about" onClick={() => setIsMenuOpen(false)}>
        <div className="group flex items-center gap-1 cursor-pointer">
          <FiUser
            className={`text-lg transition ${
              pathname === "/about"
                ? "text-[#ffb900]"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          />
          <span
            className={`relative text-sm transition ${
              pathname === "/about"
                ? "text-[#ffb900] font-semibold"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          >
            Hakkımda
            <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-[#ffb900]"></span>
          </span>
        </div>
      </Link>
      <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
        <div className="group flex items-center gap-1 cursor-pointer">
          <FiBookOpen
            className={`text-lg transition ${
              pathname === "/blog"
                ? "text-[#ffb900]"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          />
          <span
            className={`relative text-sm transition ${
              pathname === "/blog"
                ? "text-[#ffb900] font-semibold"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          >
            Blog
            <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-[#ffb900]"></span>
          </span>
        </div>
      </Link>
      <Link href="/youtube" onClick={() => setIsMenuOpen(false)}>
        <div className="group flex items-center gap-1 cursor-pointer">
          <FiYoutube
            className={`text-lg transition ${
              pathname === "/youtube"
                ? "text-[#ffb900]"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          />
          <span
            className={`relative text-sm transition ${
              pathname === "/youtube"
                ? "text-[#ffb900] font-semibold"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          >
            YouTube
            <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-[#ffb900]"></span>
          </span>
        </div>
      </Link>
      <a
        href="https://www.instagram.com/coderyusuff/?igsh=cndtdWE4eHBvdzU%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="group flex items-center gap-1 cursor-pointer">
          <FiInstagram
            className={`text-lg transition ${
              false
                ? "text-[#ffb900]"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          />
          <span
            className={`relative text-sm transition ${
              false
                ? "text-[#ffb900] font-semibold"
                : "text-gray-300 group-hover:text-[#ffb900]"
            }`}
          >
            Instagram
            <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-[#ffb900]"></span>
          </span>
        </div>
      </a>
    </>
  );

  return (
    <nav className="w-full px-4 py-2 bg-transparent">
      <div className="flex items-center justify-between max-w-6xl mx-auto relative w-full">
        <div className="flex items-center w-full">
          <button
            ref={buttonRef}
            className="md:hidden flex flex-col gap-[4px] text-gray-300 ml-auto"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="w-6 h-[2px] bg-gray-300"></span>
            <span className="w-6 h-[2px] bg-gray-300"></span>
            <span className="w-6 h-[2px] bg-gray-300"></span>
          </button>
          <div className="w-full flex justify-end">
            <div className="hidden md:flex items-center gap-8">{menuItems}</div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full w-full border-t-1 left-0 bg-[#001628] shadow-lg p-6 flex flex-col gap-4 z-50 md:hidden"
        >
          {menuItems}
        </div>
      )}
    </nav>
  );
};

export default NavbarPage;
