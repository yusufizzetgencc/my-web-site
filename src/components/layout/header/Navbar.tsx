import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center gap-6">
      <Link href="/about">
        <span
          className={`text-sm transition ${
            pathname === "/about"
              ? "text-[#ffb900] font-semibold"
              : "text-gray-300 hover:text-[#ffb900]"
          }`}
        >
          Hakkımda
        </span>
      </Link>
      <Link href="/blog">
        <span
          className={`text-sm transition ${
            pathname === "/blog"
              ? "text-[#ffb900] font-semibold"
              : "text-gray-300 hover:text-[#ffb900]"
          }`}
        >
          Blog
        </span>
      </Link>
      <Link href="/youtube">
        <span
          className={`text-sm transition ${
            pathname === "/youtube"
              ? "text-[#ffb900] font-semibold"
              : "text-gray-300 hover:text-[#ffb900]"
          }`}
        >
          YouTube
        </span>
      </Link>
    </div>
  );
};

export default NavbarPage;
