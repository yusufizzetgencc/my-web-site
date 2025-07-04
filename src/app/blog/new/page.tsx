"use client";

import React, { useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { toast, Toaster } from "react-hot-toast";

import TitleInput from "@/components/blog/TitleInput";
import CategorySelect from "@/components/blog/CategorySelect";
import EditorWithToolbar from "@/components/blog/EditorWithToolbar";
import ThumbnailUploader from "@/components/blog/ThumbnailUploader";

const categoryMap: Record<string, string> = {
  Yazılım: "SOFTWARE",
  Tasarım: "DESIGN",
  "Yapay Zeka": "AI",
  "Veri Bilimi": "DATA_SCIENCE",
  "Mobil Uygulamalar": "MOBILE",
  "Web Geliştirme": "WEB",
  Donanım: "HARDWARE",
  "Siber Güvenlik": "CYBER_SECURITY",
  Blockchain: "BLOCKCHAIN",
  "Oyun Geliştirme": "GAMING",
  DevOps: "DEVOPS",
  "Yazılım Testi": "TESTING",
  Frontend: "FRONTEND",
  Backend: "BACKEND",
  "Full Stack": "FULLSTACK",
  "Makine Öğrenmesi": "MACHINE_LEARNING",
  "Derin Öğrenme": "DEEP_LEARNING",
  Elektronik: "ELECTRONICS",
  Robotik: "ROBOTICS",
  "Gömülü Sistemler": "EMBEDDED",
  "Yapay Sinir Ağları": "NEURAL_NETWORKS",
  "Sağlık Teknolojileri": "HEALTH_TECH",
  "Yazılım Mühendisliği": "SOFTWARE_ENGINEERING",
  Yemek: "FOOD",
  Seyahat: "TRAVEL",
  Kariyer: "CAREER",
  Eğitim: "EDUCATION",
  "Kişisel Gelişim": "SELF_IMPROVEMENT",
  Finans: "FINANCE",
  Haberler: "NEWS",
};

const NewBlogPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    category: "Yazılım",
    content: "",
    thumbnail: "",
  });
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color.configure({ types: ["textStyle"] }),
    ],
    content: form.content,
    onUpdate: ({ editor }) => {
      setForm((prev) => ({
        ...prev,
        content: editor.getHTML(),
      }));
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.content || !form.category || !form.thumbnail) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/blog/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          category: categoryMap[form.category] || form.category.toUpperCase(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Bir hata oluştu");
      } else {
        Swal.fire("Başarılı", "Blog oluşturuldu!", "success").then(() => {
          router.push("/blog");
        });
      }
    } catch (error) {
      console.error("[BLOG_SUBMIT_ERROR]", error);
      toast.error("Sunucu hatası oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <Toaster position="top-right" reverseOrder={false} />
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 text-[#fff] border-b border-gray-300 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Yeni Blog Oluştur
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow space-y-8 border"
      >
        <TitleInput value={form.title} onChange={handleChange} />
        <CategorySelect
          value={form.category || ""}
          onChange={(e) => {
            const selected = e.target.value;
            setForm((prev) => ({ ...prev, category: selected }));
          }}
        />
        <EditorWithToolbar editor={editor} />
        <hr className="my-6 border-gray-200" />
        <ThumbnailUploader
          thumbnail={form.thumbnail}
          setThumbnail={(val) =>
            setForm((prev) => ({ ...prev, thumbnail: val }))
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ffb900] hover:bg-[#ffde59] text-[#002133] font-semibold py-2 rounded transition duration-200 disabled:opacity-60"
        >
          {loading ? "Oluşturuluyor..." : "Blogu Yayınla"}
        </button>
      </form>
    </section>
  );
};

export default NewBlogPage;
