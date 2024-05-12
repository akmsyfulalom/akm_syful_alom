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
    unique: true, 
    match: [/\S+@\S+\.\S+/, 'is invalid'], 
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

export default UserModel;