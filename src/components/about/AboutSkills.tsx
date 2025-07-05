// src/components/about/AboutSkills.tsx
import {
  CodeBracketIcon,
  ServerStackIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function AboutSkills() {
  const skills = [
    { icon: CodeBracketIcon, label: "HTML / CSS / Tailwind" },
    { icon: DevicePhoneMobileIcon, label: "JavaScript / TypeScript" },
    { icon: ArrowTrendingUpIcon, label: "React / Next.js" },
    { icon: ServerStackIcon, label: "Node.js / Express" },
    { icon: CpuChipIcon, label: "MySQL / MongoDB" },
    { icon: WrenchScrewdriverIcon, label: "Git / GitHub" },
  ];

  return (
    <section className="py-12 bg-gradient-to-r  border-2  border-[#001a2e] from-[#00111b] to-[#001a2e] rounded-2xl shadow-md px-5">
      <h2 className="text-3xl font-bold text-white mb-10 relative inline-block">
        <span className="relative z-10 text-[#dedede] text-4xl">
          Yetenekler
        </span>
        <span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-400 z-0 rounded-md"></span>
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-[#1e293b] ">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-white/5 text-white p-4 border-r-1  border-l-1 rounded-lg shadow hover:shadow-lg transition"
          >
            <skill.icon className="w-6 h-6 text-[#ffb900]" />
            <span className="font-medium">{skill.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
