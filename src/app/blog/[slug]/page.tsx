import { blogs as staticBlogs } from "../blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import he from "he";
import Script from "next/script";

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
    <>
      {/* Google Ads Script */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />

      <main
        className="mt-22 max-w-full mx-auto px-6 py-12 rounded-lg shadow-xl
          grid grid-cols-1 md:grid-cols-[0.75fr_3.5fr_0.75fr] gap-8"
        style={{
          background: "linear-gradient(135deg, #fff 0%, #efefef 100%)",
          color: "#000000",
          minHeight: "100vh",
        }}
      >
        {/* Sol Yan Bar */}
        <aside className="bg-white shadow-md sticky top-20 h-fit">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1731461024871182" // Senin client ID'n
            data-ad-slot="2673851443" // Sol reklam birimi ID'n
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script
            id="adsense-left-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </aside>

        {/* Orta Ana İçerik */}
        <article
          itemScope
          itemType="https://schema.org/BlogPosting"
          className="bg-white rounded-lg p-6 shadow-md"
          style={{ color: "#000" }}
        >
          <header className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-black hover:text-gray-700 transition-colors"
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

          <h1 className="text-3xl font-extrabold mb-4">{blog.title}</h1>

          {blog.thumbnail && (
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                width={1200}
                height={600}
                quality={100}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="flex items-center text-sm text-black font-medium gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-black"
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
                className="w-4 h-4 text-black"
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

          <section>
            <div
              itemProp="articleBody"
              className="text-base leading-relaxed text-gray-700
                [&_h1]:text-3xl [&_h2]:text-2xl [&_h3]:text-xl
                [&_ul]:list-disc [&_li]:ml-5
                [&_strong]:font-semibold
                [&_a]:text-blue-600 [&_a:hover]:underline"
              dangerouslySetInnerHTML={{ __html: he.decode(blog.content) }}
            />
          </section>

          <section className="mt-16 bg-gray-100 p-8 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Diğer Bloglar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherBlogs.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-blue-500/40 transition duration-300 bg-white"
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
                    <h3 className="text-lg font-bold text-black">
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

        {/* Sağ Yan Bar */}
        <aside className="bg-white shadow-md sticky top-20 h-fit">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1731461024871182" // Senin client ID'n
            data-ad-slot="1228692235" // Sağ reklam birimi ID'n
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script
            id="adsense-right-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </aside>
      </main>
    </>
  );
}
