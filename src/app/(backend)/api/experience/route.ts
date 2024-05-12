import { NextRequest, NextResponse } from "next/server";
import { experienceService } from "./experience-modules/experience.service"; // Assuming you have an experience service module

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json(); 
        const data = await experienceService.createExperience(payload); // Use createExperience instead of createSkillFromDb
        return NextResponse.json({
            status: 200,
            message: "Experience is created successfully",
            data,
        });
    } catch (error) {
        console.error("Error creating experience:", error);
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}

export async function GET(req: NextRequest) {
    try {
        const query = req?.nextUrl?.searchParams;
        const data = await experienceService.getExperiences(); // Use getExperiences instead of getSkills
        return NextResponse.json({
            status: 200,
            message: "Experiences are retrieved successfully",
            data,
        });
    } catch (error) {
        console.error("Error retrieving experiences:", error);
        return NextResponse.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
}
