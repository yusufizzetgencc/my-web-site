"use client";

import React from "react";
import Logo from "./Logo";
import NavbarPage from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm bg-gray-900/95 text-white shadow-md border-b-1">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between w-full">
        {/* Sol: Logo */}
        <div className="h-12 flex items-center flex-shrink-0">
          <Logo />
        </div>

        {/* Sağ: Navbar */}
        <div className="ml-auto">
          <NavbarPage />
        </div>
      </div>
    </header>
  );
};

export default Header;
