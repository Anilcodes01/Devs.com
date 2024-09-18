import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const userId = formData.get('userId') as string;
    const image = formData.get('image') as File | null;

    if (!content && !image) {
      return NextResponse.json({ error: "Content or image is required" }, { status: 400 });
    }

    let imagePath = null;
    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileExtension = path.extname(image.name);
      const newFilename = `${Date.now()}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      await fs.mkdir(uploadDir, { recursive: true });
      const newPath = path.join(uploadDir, newFilename);
      await fs.writeFile(newPath, buffer);
      imagePath = `/uploads/${newFilename}`;
    }

    const createPost = await prisma.post.create({
      data: {
        content: content || '',
        image: imagePath,
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        user: {
          select: {
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: 'Post created successfully!',
      createPost
    }, { status: 200 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({
      message: "Error while creating post!",
      error: (error as Error).message,
    }, { status: 500 });
  }
}