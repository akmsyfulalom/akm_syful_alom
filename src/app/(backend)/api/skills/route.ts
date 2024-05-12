import { NextRequest, NextResponse } from "next/server";
import { skillServices } from "./skills-modules/skills.service";

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json(); 
        const data = await skillServices.createSkillFromDb(payload); // Use createSkillFromDb instead of createProductInToDb
        return NextResponse.json({
            status: 200,
            message: "Skill is created successfully",
            data,
        });
    } catch (error) {
        console.error("Error creating skill:", error);
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

export async function GET(req: NextRequest) {
    try {
        const query = req?.nextUrl?.searchParams;
        const data = await skillServices.getSkills(); // Use getSkills instead of getAllProductFromDb
        return NextResponse.json({
            status: 200,
            message: "Skills are retrieved successfully",
            data,
        });
    } catch (error) {
        console.error("Error retrieving skills:", error);
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}
