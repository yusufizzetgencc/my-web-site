"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs as staticBlogs } from "./blog-data";
import he from "he";
import { FaCalendarAlt } from "react-icons/fa";
import { motion, easeOut, easeInOut } from "framer-motion";

type Blog = {
  title: string;
  slug: string;
  thumbnail: string;
  content: string;
  date: string;
  description?: string;
};

const BlogPage = () => {
  const allBlogs: Blog[] = staticBlogs.map((blog) => ({
    title: blog.title,
    slug: blog.slug,
    thumbnail: blog.thumbnail,
    content: blog.content,
    date: blog.createdAt,
    description: blog.description,
  }));

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <main
      className="min-h-screen text-white py-16 px-4"
      style={{
        background:
          "linear-gradient(135deg, rgba(11, 13, 20, 0.9) 0%, rgba(31, 31, 32, 0.9) 50%, rgba(0,0,0,0.95) 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      <h1 className="mt-10 text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-wide text-white">
        Blog Yazıları
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-stretch"
      >
        {allBlogs.map((blog) => {
          const title = he.decode(blog.title);
          const thumbnail = he.decode(blog.thumbnail);
          const cleanContent =
            he.decode(blog.content.replace(/<[^>]+>/g, "")).slice(0, 180) +
            "...";

          return (
            <motion.div
              key={blog.slug}
              variants={cardVariants}
              whileHover="hover"
              className="cursor-pointer flex flex-col"
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="bg-black/30 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden
            flex flex-col shadow-md
            hover:border-white hover:shadow-white/40
            transition-all duration-300 flex-grow"
                aria-label={`Blog yazısı: ${title} detaylarını oku`}
              >
                {thumbnail && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-xl flex-shrink-0">
                    <Image
                      src={thumbnail}
                      alt={title}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="object-cover transition-all duration-500"
                      priority={true}
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow min-h-[320px]">
                  <h2 className="text-2xl font-semibold mb-3 text-white">
                    {title}
                  </h2>

                  <div className="flex items-center text-gray-300 text-sm mb-4 space-x-2">
                    <FaCalendarAlt className="text-gray-300" />
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <p className="text-gray-200 flex-grow line-clamp-4 mb-6">
                    {cleanContent}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-2 text-yellow-200 font-semibold hover:text-white transition-colors">
                    Devamını Oku
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
};

export default BlogPage;
