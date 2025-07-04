import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prismadb";
import { BlogCategory } from "@prisma/client";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, "Başlık zorunludur."),
  content: z.string().min(1, "İçerik zorunludur."),
  category: z.string().min(1, "Kategori zorunludur."),
  thumbnail: z.string().url("Geçerli bir görsel URL'si gereklidir."),
});

function generateSlug(title: string): string {
  return (
    title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") +
    "-" +
    Math.random().toString(36).substring(2, 6)
  );
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
    }

    const json = await req.json();
    const parsed = blogSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { title, content, category, thumbnail } = parsed.data;

    const user = await prisma.blogUser.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı." },
        { status: 404 }
      );
    }

    const validCategory = BlogCategory[category as keyof typeof BlogCategory];

    if (!validCategory) {
      return NextResponse.json(
        { error: "Geçersiz kategori." },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);

    const blog = await prisma.blogPost.create({
      data: {
        title,
        content,
        category: validCategory,
        thumbnail,
        slug,
        userId: user.id,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error: unknown) {
    console.error("[BLOG_CREATE_ERROR]", error);
    return NextResponse.json(
      { error: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
