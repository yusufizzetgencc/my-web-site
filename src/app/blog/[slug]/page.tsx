import { blogs as staticBlogs } from "../blog-data";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import he from "he";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export async function generateMetadata(context: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await context.params;

  const blog =
    (await prisma.blog.findUnique({
      where: { slug },
    })) ??
    staticBlogs.find((b) => b.slug === slug) ??
    null;

  if (!blog) return {};

  return {
    title: blog.title,
    description: he.decode(blog.content.slice(0, 150)),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let blog:
    | ({
        user: {
          id: string;
          firstName: string;
          lastName: string;
          username: string;
          email: string;
          password: string;
          avatar: string | null;
          createdAt: Date;
        };
      } & {
        id: string;
        title: string;
        slug: string;
        category: string;
        thumbnail: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
      })
    | (typeof staticBlogs)[number]
    | null = await prisma.blog.findUnique({
    where: { slug },
    include: { user: true },
  });

  if (!blog) {
    blog = staticBlogs.find((b) => b.slug === slug) ?? null;
    if (!blog) return notFound();
  }

  let otherBlogs = [];
  try {
    otherBlogs = await prisma.blog.findMany({
      where: { NOT: { slug } },
      take: 4,
      orderBy: { createdAt: "desc" },
    });
  } catch {
    otherBlogs = staticBlogs.filter((b) => b.slug !== slug).slice(0, 4);
  }

  return (
    <main className="mt-5 max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[#002133] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Geri Dön
        </Link>
      </div>
      <div className="mb-6">
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client="ca-pub-1234567890123456"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-[#0f172a]">{blog.title}</h1>

      {blog.thumbnail && (
        <div className="mb-6">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={1200}
            height={600}
            quality={100}
            priority
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>
      )}

      <div className=" flex items-center text-sm text-[#002133] font-medium gap-6 mb-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#ffb900]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0H4.5z"
            />
          </svg>
          <span>
            Yazar:{" "}
            {"user" in blog
              ? `${blog.user.firstName} ${blog.user.lastName}`
              : "Yusuf İzzet Genç"}
          </span>
        </div>
        <div className=" flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#ffb900]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <article
        className="text-base leading-relaxed text-[#002133] [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_ul]:list-disc [&_li]:ml-5 [&_strong]:font-semibold [&_a]:text-blue-600 [&_a:hover]:underline"
        dangerouslySetInnerHTML={{ __html: he.decode(blog.content) }}
      />

      <section className="mt-16 bg-[#f3f4f6] p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-[#0f172a]">
          Diğer Bloglar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherBlogs.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 bg-white"
            >
              {item.thumbnail && (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-40"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#0f172a]">
                  {item.title.length > 60
                    ? item.title.slice(0, 60) + "..."
                    : item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
