"use client";

import { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMilSecDur = 1200;
    const incrementTime = 30;
    const increment = Math.ceil(end / (totalMilSecDur / incrementTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
}

export default function AboutStats() {
  return (
    <section className="py-10 px-10 text-center mt-8 border-2  rounded-2xl border-[#001a2e] bg-gradient-to-b from-[#00111b] to-[#001a2e]">
      <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">
        İstatistikler
      </h2>
      <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10 rounded-full animate-fade-in delay-100" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90">
        <div className="bg-white/5 rounded-lg p-4 shadow-lg motion-safe:animate-fade-in-up delay-100">
          <AcademicCapIcon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-4xl font-extrabold">
            <AnimatedNumber target={5} />
          </p>
          <p className="mt-1">Yıllık Deneyim</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 shadow-lg motion-safe:animate-fade-in-up delay-200">
          <BriefcaseIcon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-4xl font-extrabold">
            <AnimatedNumber target={50} />
          </p>
          <p className="mt-1">Proje Tamamlandı</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 shadow-lg motion-safe:animate-fade-in-up delay-300">
          <CodeBracketIcon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-4xl font-extrabold">
            <AnimatedNumber target={100000} />
          </p>
          <p className="mt-1">Kod Satırı</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 shadow-lg motion-safe:animate-fade-in-up delay-400">
          <CpuChipIcon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-4xl font-extrabold">
            <AnimatedNumber target={20} />
          </p>
          <p className="mt-1">Teknoloji</p>
        </div>
      </div>
    </section>
  );
}
