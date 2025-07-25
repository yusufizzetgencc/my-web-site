import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuf İzzet Genç | Kişisel Blog",
  description:
    "Yusuf İzzet Genç'in kişisel blogunda yazılım, yapay zeka, web geliştirme ve teknoloji dünyasından güncel içeriklerle bilgiye ulaşın. Kodlamayı birlikte keşfedin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1731461024871182"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <>
          <div className="min-h-screen flex flex-col justify-between text-white">
            <Header />
            <main className="flex-1 ">{children}</main>
            <Footer />
          </div>
          <Toaster richColors />
        </>
      </body>
    </html>
  );
}
