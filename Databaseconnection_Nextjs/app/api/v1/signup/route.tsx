import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    console.log(data.username);
    console.log(data.password);

    if (!data.username || !data.password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Save user to database
    await prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
      }
    });

    return NextResponse.json({ message: "User signed up successfully" });
  } catch (e) {
    console.error("Signup Error:", e);

    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Something went wrong" },
      { status: 500 }
    );
  }
}


