// src/components/about/AboutContact.tsx
export default function AboutContact() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold text-[#0f172a] mb-4">İletişime Geç</h2>
      <p className="mb-4 text-white">
        Her türlü soru ve iş birliği için benimle iletişime geçmekten çekinme.
      </p>
      <a
        href="coderyusuff@gmail.com"
        className="inline-block bg-[#ffb900] text-[#0f172a] px-6 py-2 rounded font-semibold hover:bg-[#e0a800] transition"
      >
        E-posta Gönder
      </a>
    </section>
  );
}
