import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const id = request.url.split("user/")[1];
    const user = await prisma.users.findUnique({
      where: {
        id: id as string,
      },
    });

    return NextResponse.json({
      status: true,
      code: 200,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
}
