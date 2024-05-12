import { NextRequest, NextResponse } from "next/server";
import { experienceService } from "../experience-modules/experience.service";

interface ParamsProps {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const experienceId = params.id;
    const data = await experienceService.getExperienceById(experienceId); // Use getExperienceById instead of getSkillById
    return NextResponse.json({
      status: 200,
      message: "Experience is retrieved successfully",
      data,
    });
  } catch (error) {
    console.error("Error retrieving Experience:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function PUT(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const experienceId = params.id;
    const payload = await req.json();
    const data = await experienceService.updateExperienceById(experienceId, payload); // Use updateExperienceById instead of updateSkillById
    return NextResponse.json({
      status: 200,
      message: "Experience is updated successfully",
      data,
    });
  } catch (error) {
    console.error("Error updating Experience:", error);

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
    const experienceId = params.id;
    const data = await experienceService.deleteExperienceById(experienceId); // Use deleteExperienceById instead of deleteSkillById
    return NextResponse.json({
      status: 200,
      message: "Experience is deleted successfully",
      data,
    });
  } catch (error) {
    console.error("Error deleting Experience:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
