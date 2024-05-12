import { NextRequest, NextResponse } from "next/server";
import { blogServices } from "./blogs-modules/blogs.service";



export async function POST(req: NextRequest) {
    const payload = await req.json();
    const data = await blogServices.createBlogFromDb(payload);
    return NextResponse.json({
      status: 200,
      message: "Blog is created successfully",
      data,
    });
  };


    
export async function GET() {
    let data = await blogServices.getBlogs();
     // Check if order data is available
     if (!data || data?.length === 0) {
      return NextResponse.json({
        status: 404,
        message: "No blogs data found",
        data: [],
      });
    }

    data = data.reverse()
    return NextResponse.json({
      status: 200,
      message: "Blogs is retrieved successfully",
      data,
    });
  }
