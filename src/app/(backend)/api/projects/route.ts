import { NextRequest, NextResponse } from "next/server";
import { projectServices } from "./projects-modules/projects.service";

export async function POST(req: NextRequest) {
    const payload = await req.json();
    const data = await projectServices.createProjectFromDb(payload);
    return NextResponse.json({
      status: 200,
      message: "Project is created successfully",
      data,
    });
}

export async function GET() {
    let data = await projectServices.getProjects();
    
    // Check if project data is available
    if (!data || data?.length === 0) {
      return NextResponse.json({
        status: 404,
        message: "No project data found",
        data: [],
      });
    }

    data = data.reverse();
    return NextResponse.json({
      status: 200,
      message: "Projects are retrieved successfully",
      data,
    });
}
