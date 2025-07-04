import React from "react";
import Link from "next/link";

const NavbarPage = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <Link href="/about">
        <span className="text-sm text-gray-300 hover:text-[#ffb900] transition">
          Hakkımda
        </span>
      </Link>
      <Link href="/blog">
        <span className="text-sm text-gray-300 hover:text-[#ffb900] transition">
          Blog
        </span>
      </Link>
      <Link href="/youtube">
        <span className="text-sm text-gray-300 hover:text-[#ffb900] transition">
          YouTube
        </span>
      </Link>
    </div>
  );
};

export default NavbarPage;
