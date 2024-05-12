import { NextRequest, NextResponse } from "next/server";
import { skillServices } from "../skills-modules/skills.service";


interface ParamsProps {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const skillId = params.id;
    const data = await skillServices.getSkillById(skillId); // Use getSkillById instead of getProjectById
    return NextResponse.json({
      status: 200,
      message: "Skill is retrieved successfully",
      data,
    });
  } catch (error) {
    console.error("Error retrieving Skill:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function PUT(req: NextRequest, { params }: { params: ParamsProps }) {
  try {
    const skillId = params.id;
    const payload = await req.json();
    const data = await skillServices.updateSkillById(skillId, payload); // Use updateSkillById instead of updateProjectById
    return NextResponse.json({
      status: 200,
      message: "Skill is updated successfully",
      data,
    });
  } catch (error) {
    console.error("Error updating Skill:", error);

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
    const skillId = params.id;
    const data = await skillServices.deleteSkillById(skillId); // Use deleteSkillById instead of deleteProjectById
    return NextResponse.json({
      status: 200,
      message: "Skill is deleted successfully",
      data,
    });
  } catch (error) {
    console.error("Error deleting Skill:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
