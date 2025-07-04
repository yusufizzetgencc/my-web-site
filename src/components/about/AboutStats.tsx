"use client";

export default function AboutStats() {
  const stats = [
    { value: "3+", label: "Yıllık Deneyim" },
    { value: "50+", label: "Tamamlanan Proje" },
    { value: "100%", label: "Müşteri Memnuniyeti" },
    { value: "1M+", label: "Yazılan Kod Satırı" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
      {stats.map((item, i) => (
        <div key={i} className="bg-[#1E293B] p-6 rounded-lg shadow-md">
          <div className="text-3xl font-bold text-[#38BDF8]">{item.value}</div>
          <div className="text-[#CBD5E1] mt-2">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
