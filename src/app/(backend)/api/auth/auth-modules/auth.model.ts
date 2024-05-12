import mongoose from "mongoose";
import { Schema } from "mongoose";
import { TUserRegister } from "./auth.interface";

const userSchema: Schema = new Schema<TUserRegister>({
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    match: [/\S+@\S+\.\S+/, 'is invalid'], // Simple regex for email validation
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type:String,
    default:"user"
  }
  
}, {
  timestamps: true 
});

const UserModel =  mongoose?.models?.user || mongoose?.model('user', userSchema);

export default UserModel