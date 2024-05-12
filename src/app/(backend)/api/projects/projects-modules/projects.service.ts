import connectDB from "@/database/connectDb";
import { projectModel } from "./projects.model";
import { TProject } from "./projects.interface";



connectDB();

export async function createProjectFromDb(payload: TProject) {
    try {
        const project = await projectModel.create(payload);
        return project;
    } catch (error) {
        console.log("Error creating project", error);
        throw new Error("Failed to create project!");
    }
}

export async function getProjects() {
    try {
        const projects = await projectModel.find({});
        return projects;
    } catch (error) {
        console.log("Error retrieving projects", error);
        throw new Error("Failed to retrieve projects!");
    }
}

export async function getProjectById(id: string) {
    try {
        const project = await projectModel.findById(id);
        return project;
    } catch (error) {
        console.error("Error retrieving project:", error);
        throw new Error("Failed to retrieve project");
    }
}

export async function updateProjectById(id: string, updateData: Partial<TProject>) {
    try {
        const project = await projectModel.findByIdAndUpdate(id, updateData, {
            new: true
        });
        if (!project) {
            throw new Error("Project not found!");
        }
        return project;
    } catch (error) {
        console.error("Error updating project:", error);
        throw new Error("Failed to update project");
    }
}

export async function deleteProjectById(id: string) {
    try {
        const project = await projectModel.findByIdAndDelete(id);
        if (!project) {
            throw new Error("Project not found");
        }
        return project;
    } catch (error) {
        console.error("Error deleting project:", error);
        throw new Error("Failed to delete project");
    }
}

export const projectServices = {
    createProjectFromDb,
    getProjects,
    updateProjectById,
    deleteProjectById,
    getProjectById
};
