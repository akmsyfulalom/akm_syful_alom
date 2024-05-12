import { Schema, Document } from "mongoose";
import mongoose from "mongoose";
import { TExperience } from "./experience.interface";



const ExperienceSchema = new Schema<TExperience>({
    companyName: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    publicId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
});

// Collection name
const collectionName = "experience";

export const experienceModel = mongoose.models?.[collectionName] || mongoose.model<TExperience>(collectionName, ExperienceSchema);
