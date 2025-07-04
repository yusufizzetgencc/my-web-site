"use client";

export default function AboutServices() {
  const services = [
    {
      title: "Web Geliştirme",
      desc: "React ve Next.js ile modern, responsive, SEO uyumlu web siteleri geliştiririm.",
    },
    {
      title: "Mobil Uygulamalar",
      desc: "React Native ile iOS ve Android uyumlu mobil uygulamalar oluştururum.",
    },
    {
      title: "API & Backend",
      desc: "Node.js, Prisma ve veritabanlarıyla ölçeklenebilir API'ler yazarım.",
    },
    {
      title: "CMS & Admin Panel",
      desc: "Next.js ve Tailwind ile yönetim panelleri geliştiririm.",
    },
    {
      title: "E-Ticaret",
      desc: "Shopify, Stripe, Iyzico ile özelleştirilmiş sistemler geliştiririm.",
    },
    {
      title: "UI/UX Tasarımı",
      desc: "Figma ve Tailwind CSS ile modern kullanıcı arayüzleri.",
    },
  ];

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-[#38BDF8] mb-4">
        Neler Yapabilirim?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-[#0F172A] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
          >
            <h4 className="text-lg font-bold text-[#38BDF8] mb-2">{s.title}</h4>
            <p className="text-sm text-[#94A3B8]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
