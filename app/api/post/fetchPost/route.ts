import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const getPosts = await prisma.post.findMany({
            select: {
                id: true,
                content: true,
                image: true,
                createdAt: true,
                updatedAt: true,
                userId: true,
                user: {
                    select: {
                        name: true,
                        avatarUrl: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Log the fetched posts for debugging
        console.log('Fetched posts:', JSON.stringify(getPosts, null, 2));

        return NextResponse.json({
            message: 'Posts fetched',
            getPosts
        });
    } catch (error) {
        // Log the full error for debugging
        console.error('Error fetching posts:', error);

        return NextResponse.json({
            message: 'Error while fetching posts!',
             // Only send the error message, not the full error object
        }, { status: 500 });
    }
}