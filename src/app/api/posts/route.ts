import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, content } = body;

    const post = await prisma?.posts.create({
      data: {
        userId,
        content,
      },
    });

    return NextResponse.json({
      status: 201,
      post,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        status: 500,
        message: error.message,
      });
    }
  }
}
