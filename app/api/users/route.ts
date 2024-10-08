import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        avatarUrl: true,
      },
    });
    return NextResponse.json({
        message: 'User fetched successfully',
        users
    }, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching users",
        error,
      },
      { status: 500 }
    );
  }
}
