import connectDB from "@/database/connectDb";
import { TBlog } from "./blogs.interface";
import { blogModel } from "./blogs.model";

connectDB(); 


export async function createBlogFromDb(payload: TBlog){
    try {
        const blog = await blogModel.create(payload); 
        return blog; 
    } catch (error) {
        console.log("Error creating blog", error); 
        throw new Error("Failed to create blog!")
    }
}; 


export async function getBlogs(){
    try {
        const blogs = await blogModel.find({}); 
        return blogs; 
    } catch (error) {
        console.log("Error retrieving blogs", error); 
        throw new Error("Failed to retrieving blogs!")
    }
};

export async function getBlogById(id: string) {
    try {
        const blog = await blogModel.findById(id);
        return blog;
    } catch (error) {
        console.error("Error retrieving blog:", error);
        throw new Error("Failed to retrieve blog");
    }
}


export async function updateBlogById(id: string, updateData: Partial<TBlog>){
    try {
        const blog = await blogModel.findByIdAndUpdate(id, updateData, {
            new: true
        }); 
        if(!blog){
            throw new Error("Blog not found!")
        }
    } catch (error) {
        console.error("Error updating blog:", error);
        throw new Error("Failed to update blog");
    }
};


export async function deleteBlogById(id: string) {
    try {
        const blog = await blogModel.findByIdAndDelete(id);
        if (!blog) {
            throw new Error("blog not found");
        }
        return blog;
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw new Error("Failed to delete blog");
    }
}; 


export const blogServices = {
    createBlogFromDb,
    getBlogs, 
    updateBlogById, 
    deleteBlogById,
    getBlogById
};