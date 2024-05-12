
import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "../auth-modules/auth.service";


export async function POST(req: NextRequest) {
    const payload = await req.json();
    const data = await AuthService.createUserIntoDB(payload);
    console.log("🚀 ~ POST ~ data:", data)
    return NextResponse.json({
      status: 200,
      message: "User is created successfully",
      data,
    });
  }