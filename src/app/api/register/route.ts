import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, email } = body;
    const hashPassword = await hash(password, 12);

    if (!username || !email || !hashPassword) {
      return NextResponse.json({
        message: "Please provide username, email and password",
        status: false,
      });
    }

    const existingEmail = await prisma.users.findUnique({
      where: { email: email },
    });
    const existingUsername = await prisma.users.findUnique({
      where: { username: username },
    });

    if (existingEmail || existingUsername) {
      return NextResponse.json({
        message: existingEmail
          ? "Email Already Exist"
          : "Username Already Exist",
        status: false,
      });
    }

    await prisma.users.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    return NextResponse.json({ message: "User Created", status: true });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message, status: 500 });
    }
  }
}
