"use client";

import Image from "next/image";
import React from "react";

interface Props {
  thumbnail: string;
  setThumbnail: (value: string) => void;
}

const ThumbnailUploader = ({ thumbnail, setThumbnail }: Props) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setThumbnail(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#f9fafb] p-4 rounded-md border">
      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block mb-2 font-semibold text-[#0f172a]">
            Görsel URL
          </label>
          <input
            type="text"
            name="thumbnail"
            value={thumbnail}
            disabled={thumbnail.startsWith("data:image")}
            onChange={(e) => setThumbnail(e.target.value)}
            className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#ffb900] placeholder-gray-400 text-sm text-[#0f172a] ${
              thumbnail.startsWith("data:image")
                ? "bg-gray-100 cursor-not-allowed"
                : ""
            }`}
            placeholder="Kapak görseli URL'si (örnek: https://...)"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-2 font-semibold text-[#0f172a]">
            Veya Görsel Yükle
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full px-4 py-2 border rounded bg-white text-sm text-[#0f172a] cursor-pointer"
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2 italic">
        En iyi görüntü kalitesi için minimum 1200x600 piksel çözünürlüğe sahip
        yatay (landscape) formatta bir görsel yükleyin.
      </p>

      {thumbnail &&
        (thumbnail.startsWith("http") ||
          thumbnail.startsWith("data:image")) && (
          <div className="relative w-full h-48 mt-4 rounded border overflow-hidden">
            <Image
              src={thumbnail}
              alt="Thumbnail Preview"
              fill
              className="object-cover rounded shadow-inner"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        )}
    </div>
  );
};

export default ThumbnailUploader;
