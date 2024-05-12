
import { NextResponse } from "next/server";
import { AuthService } from "../auth-modules/auth.service";


export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
    const token = await AuthService.loginUserIntoDB(payload);
    console.log("🚀 ~ POST ~ token:", token)
    if (!token) {
      return NextResponse.json({
        status: 400,
        message: "Error: Token not available!",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "User login successful",
      token,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
}
