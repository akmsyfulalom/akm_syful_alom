import connectDB from "@/database/connectDb";
import { skillsModel } from "./skills.model";
import { TSkills } from "./skills.interface";

connectDB();

export async function createSkillFromDb(payload: TSkills) {
    try {
        const skill = await skillsModel.create(payload);
        return skill;
    } catch (error) {
        console.log("Error creating skill", error);
        throw new Error("Failed to create skill!");
    }
}

export async function getSkills() {
    try {
        const skills = await skillsModel.find({});
        return skills;
    } catch (error) {
        console.log("Error retrieving skills", error);
        throw new Error("Failed to retrieve skills!");
    }
}

export async function getSkillById(id: string) {
    try {
        const skill = await skillsModel.findById(id);
        return skill;
    } catch (error) {
        console.error("Error retrieving skill:", error);
        throw new Error("Failed to retrieve skill");
    }
}

export async function updateSkillById(id: string, updateData: Partial<TSkills>) {
    try {
        const skill = await skillsModel.findByIdAndUpdate(id, updateData, {
            new: true
        });
        if (!skill) {
            throw new Error("Skill not found!");
        }
        return skill;
    } catch (error) {
        console.error("Error updating skill:", error);
        throw new Error("Failed to update skill");
    }
}

export async function deleteSkillById(id: string) {
    try {
        const skill = await skillsModel.findByIdAndDelete(id);
        if (!skill) {
            throw new Error("Skill not found");
        }
        return skill;
    } catch (error) {
        console.error("Error deleting skill:", error);
        throw new Error("Failed to delete skill");
    }
}

export const skillServices = {
    createSkillFromDb,
    getSkills,
    updateSkillById,
    deleteSkillById,
    getSkillById
};
