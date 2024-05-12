import { NextRequest, NextResponse } from "next/server";
import { projectServices } from "../projects-modules/projects.service";

interface ParamsProps {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const projectId = params.id;
    const data = await projectServices.getProjectById(projectId);
    return NextResponse.json({
      status: 200,
      message: "Project is retrieved successfully",
      data,
    });
  } catch (error) {
    console.error("Error retrieving Project:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function PUT(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const projectId = params.id;
    const payload = await req.json();
    const data = await projectServices.updateProjectById(projectId, payload);
    return NextResponse.json({
      status: 200,
      message: "Project is updated successfully",
      data,
    });
  } catch (error) {
    console.error("Error updating Project:", error);

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
    const projectId = params.id;
    const data = await projectServices.deleteProjectById(projectId);
    return NextResponse.json({
      status: 200,
      message: "Project is deleted successfully",
      data,
    });
  } catch (error) {
    console.error("Error deleting Project:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
