// src/app/blog/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs as staticBlogs } from "./blog-data";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import he from "he";
import { FaCalendarAlt } from "react-icons/fa";

const BlogPage = async () => {
  const session = await getServerSession(authOptions);
  const dynamicBlogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  const allBlogs = [...dynamicBlogs, ...staticBlogs];
  const createHref = session?.user ? "/blog/new" : "/login";

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-end mb-6">
        <Link
          href={createHref}
          className="bg-[#ffb900] text-[#002133] font-medium px-4 py-2 rounded-md shadow hover:bg-[#ffde59] transition duration-200"
        >
          Yeni Blog Oluştur
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-10 text-center">Blog Yazıları</h1>
      <div className="flex justify-center mb-10">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "90px" }}
          data-ad-client="ca-pub-1234567890123456"
          data-ad-slot="9876543210"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
      <div className="grid md:grid-cols-3 gap-8">
        {allBlogs.map((blog) => {
          const isStatic = !("userId" in blog);
          const title = isStatic ? he.decode(blog.title) : blog.title;
          const thumbnail = isStatic
            ? he.decode(blog.thumbnail)
            : blog.thumbnail;
          const content = isStatic ? he.decode(blog.content) : blog.content;

          return (
            <Link
              key={blog.id}
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
                {"createdAt" in blog && (
                  <p className="text-sm text-gray-700 mt-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#ffb900]" />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                )}
                {isStatic && (
                  <div
                    className="prose text-sm text-[#002133] mt-2 line-clamp-4 bg-[#f9f9f9] p-2 rounded"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
                {!isStatic && (
                  <div
                    className="prose text-sm text-[#002133] mt-2 line-clamp-4 bg-[#f9f9f9] p-2 rounded"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
