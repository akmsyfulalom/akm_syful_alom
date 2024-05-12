import connectDB from "@/database/connectDb";
import { experienceModel } from "./experience.model";
import { TExperience } from "./experience.interface";

connectDB();

export async function createExperience(payload: TExperience) {
    try {
        const experience = await experienceModel.create(payload);
        return experience;
    } catch (error) {
        console.error("Error creating experience:", error);
        throw new Error("Failed to create experience");
    }
}

export async function getExperiences() {
    try {
        const experiences = await experienceModel.find({});
        return experiences;
    } catch (error) {
        console.error("Error retrieving experiences:", error);
        throw new Error("Failed to retrieve experiences");
    }
}

export async function getExperienceById(id: string) {
    try {
        const experience = await experienceModel.findById(id);
        return experience;
    } catch (error) {
        console.error("Error retrieving experience by id:", error);
        throw new Error("Failed to retrieve experience");
    }
}

export async function updateExperienceById(id: string, updateData: Partial<TExperience>) {
    try {
        const experience = await experienceModel.findByIdAndUpdate(id, updateData, {
            new: true
        });
        if (!experience) {
            throw new Error("Experience not found");
        }
        return experience;
    } catch (error) {
        console.error("Error updating experience:", error);
        throw new Error("Failed to update experience");
    }
}

export async function deleteExperienceById(id: string) {
    try {
        const experience = await experienceModel.findByIdAndDelete(id);
        if (!experience) {
            throw new Error("Experience not found");
        }
        return experience;
    } catch (error) {
        console.error("Error deleting experience:", error);
        throw new Error("Failed to delete experience");
    }
}

export const experienceService = {
    createExperience,
    getExperiences,
    getExperienceById,
    updateExperienceById,
    deleteExperienceById
};
