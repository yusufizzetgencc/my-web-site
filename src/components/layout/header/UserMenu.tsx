"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { UserCircle, ChevronDown } from "lucide-react";

interface UserSession {
  name?: string | null;
  email?: string | null;
  avatar?: string | null;
  username?: string | null;
}

const UserMenu = ({ user }: { user: UserSession }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border border-yellow-400"
            priority
          />
        ) : (
          <UserCircle size={24} className="text-[#ffde59]" />
        )}
        <span className="text-sm">
          {user?.username || user?.name || "Kullanıcı"}
        </span>
        <ChevronDown size={16} />
      </div>

      {isOpen && (
        <div className="absolute top-12 right-0 w-48 bg-white text-black rounded-md shadow-md z-50">
          <Link
            href="/dashboard/profile"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Profilim
          </Link>
          <Link
            href="/dashboard/account"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Hesabım
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Oturumu Kapat
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
