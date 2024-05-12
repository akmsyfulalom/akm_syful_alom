import mongoose, { Schema } from "mongoose";
import { TSkills } from "./skills.interface";

const SkillsSchema = new Schema<TSkills>({
    title: {
        type: String, 
        required: true, 
    }, 
    image: {
        type: String, 
        required: true, 
    }, 
    skillsTools: {
        type: String, 
        required: true, 
    }, 
    publicId: {
        type: String, 
        required: true, 
    }
});

// Collection name 
const collectionName = "skills"; 

export const skillsModel = mongoose?.models?.[collectionName] || mongoose.model<TSkills>(collectionName, SkillsSchema);