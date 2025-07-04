"use client";

export default function AboutSkills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Prisma",
    "PostgreSQL",
    "Shopify",
    "Stripe",
  ];

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-[#38BDF8] mb-4">Yetenekler</h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-[#94A3B8]">
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
