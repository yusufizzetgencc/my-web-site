"use client";

import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    title: "Yazılıma Nereden Başlamalıyım?",
    thumbnail: "https://i.ytimg.com/vi/G9V4SJMHjN8/hqdefault.jpg",
    link: "https://youtu.be/G9V4SJMHjN8?si=Uj3R3nXytiLR_1XP",
  },
  {
    title: "React ile To-Do Uygulaması",
    thumbnail: "https://i.ytimg.com/vi/dglQdGHRXEU/hqdefault.jpg",
    link: "https://youtu.be/dglQdGHRXEU?si=2k2Bl6rlKNDUgoAO",
  },
  {
    title: "Sadece Html & Css ile Hamburger Menu",
    thumbnail: "https://i.ytimg.com/vi/GsqoTNbp7jM/hqdefault.jpg",
    link: "https://youtu.be/GsqoTNbp7jM?si=hvj0utzV_SDEsPJZ",
  },
];

export default function YoutubePage() {
  return (
    <section className="mt-6 max-w-6xl mx-auto px-4 py-16 bg-[#0f172a] text-gray-800">
      <h1 className="text-4xl font-bold text-[#FF0000] mb-4 flex items-center gap-2 bg-wh">
        <FaYoutube className="text-[#FF0000]" />{" "}
        <span className="text-whit">YouTube</span>
      </h1>
      <p className="mb-10 text-white text-lg">
        Yazılım, frontend geliştirme ve projelerle ilgili videolar paylaşıyorum.
        Aşağıdan bazı öne çıkan içerikleri izleyebilirsin 👇
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.link}
            target="_blank"
            className="group bg-[#0f172a] border border-gray-200 hover:shadow-lg text-white rounded-xl overflow-hidden transition-transform transform hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={320}
                height={180}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold group-hover:text-[#38BDF8] transition">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
