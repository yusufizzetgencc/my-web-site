"use client";
import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput = ({ value, onChange }: Props) => (
  <div className="bg-[#f9fafb] p-4 rounded-md border">
    <label className="block mb-2 font-semibold text-[#0f172a]">Başlık</label>
    <input
      type="text"
      name="title"
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#ffb900] placeholder-gray-400 text-sm text-[#0f172a]"
      placeholder="Örn: 2025'te Web Geliştirme Trendleri"
    />
  </div>
);

export default TitleInput;
