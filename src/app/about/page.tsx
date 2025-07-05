import AboutIntro from "@/components/about/AboutIntro";
import AboutStats from "@/components/about/AboutStats";
import AboutSkills from "@/components/about/AboutSkills";
import AboutContact from "@/components/about/AboutContact";

export default function HakkimdaPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 text-[#E2E8F0]">
      <AboutIntro />
      <AboutStats />
      <AboutSkills />
      <AboutContact />
    </section>
  );
}
