import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { likes, postId } = await request.json();

    const post = await prisma?.posts.update({
      where: {
        id: postId,
      },
      data: {
        likes: likes + 1,
      },
    });

    return NextResponse.json({
      status: 200,
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
