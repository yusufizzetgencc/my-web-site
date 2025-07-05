"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs as staticBlogs } from "./blog-data";
import he from "he";
import { FaCalendarAlt } from "react-icons/fa";

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Blog Yazıları</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {allBlogs.map((blog) => {
          const title = he.decode(blog.title);
          const thumbnail = he.decode(blog.thumbnail);
          const cleanContent =
            he.decode(blog.content.replace(/<[^>]+>/g, "")).slice(0, 200) +
            "...";

          return (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="bg-white rounded-xl shadow-md border hover:border-[#ffb900] transition-all overflow-hidden"
            >
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt={title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold px-4 pt-4 text-black">
                {title}
              </h2>
              <div className="p-4 rounded">
                <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                  <FaCalendarAlt className="text-[#ffb900]" />
                  {new Date(blog.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-[#002133] mt-2 bg-[#f9f9f9] p-2 rounded line-clamp-4">
                  {cleanContent}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
