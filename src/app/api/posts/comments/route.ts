import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const { avatar, username, userId, postId, comment } = await request.json();

    const post = await prisma?.posts.update({
      where: {
        id: postId,
      },
      data: {
        comments: [
          {
            userId,
            avatar,
            username,
            comment,
          },
        ],
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
