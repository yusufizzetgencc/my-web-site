"use client";
import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const categories: string[] = [
  "Yazılım",
  "Tasarım",
  "Yapay Zeka",
  "Veri Bilimi",
  "Mobil Uygulamalar",
  "Web Geliştirme",
  "Donanım",
  "Siber Güvenlik",
  "Blockchain",
  "Oyun Geliştirme",
  "DevOps",
  "Yazılım Testi",
  "Frontend",
  "Backend",
  "Full Stack",
  "Makine Öğrenmesi",
  "Derin Öğrenme",
  "Elektronik",
  "Robotik",
  "Gömülü Sistemler",
  "Yapay Sinir Ağları",
  "Sağlık Teknolojileri",
  "Yazılım Mühendisliği",
  "Yemek",
  "Seyahat",
  "Kariyer",
  "Eğitim",
  "Kişisel Gelişim",
  "Finans",
  "Haberler",
];

const CategorySelect = ({ value, onChange }: Props) => (
  <div className="bg-[#f9fafb] p-4 rounded-md border">
    <label
      htmlFor="category"
      className="block mb-2 font-semibold text-[#0f172a]"
    >
      Kategori
    </label>
    <select
      id="category"
      name="category"
      value={typeof value === "string" ? value : ""}
      onChange={onChange}
      className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#ffb900] text-sm text-[#0f172a] bg-white"
    >
      <option value="">Bir kategori seçin</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>
);

export default CategorySelect;
