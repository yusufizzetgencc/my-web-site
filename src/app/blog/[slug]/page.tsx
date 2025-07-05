import { blogs as staticBlogs } from "../blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import he from "he";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = staticBlogs.find((b) => b.slug === slug) ?? null;

  if (!blog) return {};

  const plainTextContent = he
    .decode(blog.content.replace(/<[^>]+>/g, ""))
    .slice(0, 150);

  return {
    title: blog.title,
    description: blog.description || plainTextContent,
    keywords: blog.keywords ?? [],
    openGraph: {
      title: blog.title,
      description: blog.description || plainTextContent,
      url: `https://yusufizzetgenc.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.thumbnail,
          alt: blog.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description || plainTextContent,
      images: [blog.thumbnail],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = staticBlogs.find((b) => b.slug === slug) ?? null;

  if (!blog) {
    return notFound();
  }

  const otherBlogs = staticBlogs.filter((b) => b.slug !== slug).slice(0, 4);

  return (
    <main className="mt-5 max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-md">
      <article itemScope itemType="https://schema.org/BlogPosting">
        <header className="mb-6">
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
        </header>

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

        <header className="mb-6">
          <h1
            itemProp="headline"
            className="text-3xl font-bold mb-4 text-[#0f172a]"
          >
            {blog.title}
          </h1>

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

          <div className="flex items-center text-sm text-[#002133] font-medium gap-6 mb-6">
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
              <span itemProp="author">Yazar: Yusuf İzzet Genç</span>
            </div>
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
                  d="M12 6v6l4 2"
                />
              </svg>
              <span>
                <time itemProp="datePublished" dateTime={blog.createdAt}>
                  {new Date(blog.createdAt).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
            </div>
          </div>
        </header>

        <section>
          <div
            itemProp="articleBody"
            className="text-base leading-relaxed text-[#002133] [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl [&_ul]:list-disc [&_li]:ml-5 [&_strong]:font-semibold [&_a]:text-blue-600 [&_a:hover]:underline"
            dangerouslySetInnerHTML={{ __html: he.decode(blog.content) }}
          />
        </section>

        <section className="mt-16 bg-[#f3f4f6] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-[#0f172a]">
            Diğer Bloglar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherBlogs.map((item) => (
              <Link
                key={item.slug}
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
                    {new Date(item.createdAt).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
