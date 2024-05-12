
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { TUserLogin, TUserRegister } from "./auth.interface";
import UserModel from "./auth.model";
import { createToken } from "./auth.utils";


const createUserIntoDB = async (payload: TUserRegister) => {
    const { name, password, email } = payload;
  
    // check for existing email
    const existEmail = await UserModel.findOne({ email });
  
    if (existEmail) {
      throw new Error("Email already exists");
    }
    
    if (password && !existEmail) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const data = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      return data;
    }
  };


  const loginUserIntoDB = async (payload: TUserLogin) => {
    const {email, password  } = payload;
  
    // check for existing email
    const user = await UserModel.findOne({ email });
    console.log("🚀 ~ loginUserIntoDB ~ user:", user)
    
    if (!user) {
      // User not found
      return null; // Or handle the error appropriately
    }
    
    const checkedPassword = await bcrypt.compare(password, user?.password);
    if (password && user && checkedPassword) {
      const jwtPayload = {
        name: user?.name,
        userId: user?._id,
        role: user?.role,
        email: user?.email,
      };
      const token = createToken(
        jwtPayload,
        process.env.JWT_SECRET as string,
        "10h"
      );
  
  
      cookies().set('tokenakmsyfulportfolio', token)
      return token;
    }
  };
  

  export const AuthService = {
    createUserIntoDB,
    loginUserIntoDB,
  
  };
  