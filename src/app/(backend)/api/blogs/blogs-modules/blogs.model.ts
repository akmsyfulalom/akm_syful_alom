import { Schema } from "mongoose";
import { TBlog } from "./blogs.interface";
import mongoose from "mongoose";

const BlogSchema = new Schema<TBlog>({
    title: {
        type: String, 
        require: true, 
    }, 

    summary: {
        type: String, 
        require: true, 
    }, 
    image: {
        type: String, 
        require: true, 
    }, 
    publicId: {
        type: String, 
        require: true, 
    }, 
    desc: {
        type: String, 
        require: true,
    }
});


//collection name 
const collectionName = "blog"; 

export const blogModel = mongoose?.models?.[collectionName] || mongoose?.model(collectionName, BlogSchema); 