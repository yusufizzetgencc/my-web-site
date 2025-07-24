"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="block transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      aria-label="Anasayfa"
    >
      <div className="relative w-[120px] h-[130px] grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src="/images/logo.png"
          alt="freelansup logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
