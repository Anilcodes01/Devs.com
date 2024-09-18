import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, description, content, userId }: {title: string, description: string, content: string, userId: string} = await req.json();

    const newArticle = await prisma.article.create({
      data: {
        title,
        description,
        content,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include : {
        user: {
            select: {
                name: true,
                avatarUrl: true
            }
        }
      }
    });

    return NextResponse.json(
      {
        message: "Article created successfully!",
        newArticle,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while creating article",
        error,
      },
      { status: 500 }
    );
  }
}
