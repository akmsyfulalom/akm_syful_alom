import { Schema, Document } from "mongoose";
import mongoose from "mongoose";
import { TExperience } from "./experience.interface";



const ExperienceSchema = new Schema<TExperience>({
    companyName: {
        type: String,
        required: false,
    },
    location: {
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
    certificate: {
        type: String,
        required: false,
    },
    eduOrSkill: {
        type: String,
        required: true,
    },
    courseSummary: {
        type: String,
        required: false,
    },
});

// Collection name
const collectionName = "experience";

export const experienceModel = mongoose.models?.[collectionName] || mongoose.model<TExperience>(collectionName, ExperienceSchema);
