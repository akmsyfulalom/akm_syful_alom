import { NextRequest, NextResponse } from "next/server";
import { blogServices } from "../blogs-modules/blogs.service";



interface ParamsProps {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const blogId = params.id;
    const data = await blogServices.getBlogById(blogId);
    return NextResponse.json({
      status: 200,
      message: "Blog is retrieved successfully",
      data,
    });
  } catch (error) {
    console.error("Error retrieving Blog:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function PUT(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const blogId = params.id;
    const payload = await req.json();
    const data = await blogServices.updateBlogById(blogId, payload);
    return NextResponse.json({
      status: 200,
      message: "Blog is updated successfully",
      data,
    });
  } catch (error) {
    console.error("Error updating Blog:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: ParamsProps }
) {
  try {
    const blogId = params.id;
    const data = await blogServices.deleteBlogById(blogId);
    return NextResponse.json({
      status: 200,
      message: "Blog is deleted successfully",
      data,
    });
  } catch (error) {
    console.error("Error deleting Blog:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
