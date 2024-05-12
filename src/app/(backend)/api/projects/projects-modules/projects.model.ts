import { Schema } from "mongoose";
import { TProject } from "./projects.interface";
import mongoose from "mongoose";

const ProjectSchema = new Schema<TProject>({
    title: {
        type: String, 
        required: true, 
    }, 
    tackstack: [{
        id: { type: String, required: true },
        text: { type: String, required: true }
    }],
    tagline: String,
    image: {
        type: String, 
        required: true, 
    }, 
    publicId: {
        type: String, 
        required: true, 
    }, 
    summary: String,
    projectLink: String,
    desc: {
        type: String, 
        required: true,
    }
});


// Collection name 
const collectionName = "project"; 

export const projectModel = mongoose?.models?.[collectionName] || mongoose?.model<TProject>(collectionName, ProjectSchema);