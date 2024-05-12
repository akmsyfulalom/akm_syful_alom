
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie"; 

export interface User {
  name: string;
  email: string;
  role: string;
  userId: string;
}

// Create a new context
const AuthContext = createContext<[User | null, React.Dispatch<React.SetStateAction<User | null>>]>([null, () => null]);


const getUserInfo = (): User | null => {
  const cookies = new Cookies();
  const token = cookies.get("electricdrifttrike"); 
  if (token) {
    try {
      return jwtDecode<User>(token); 
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  }
  return null;
};

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);


  // Fetch user information when component mounts
  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const contextValue: [User | null, React.Dispatch<React.SetStateAction<User | null>>] = [user, setUser];
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Custom hook to access user information
export const useAuth = (): [User | null, React.Dispatch<React.SetStateAction<User | null>>] => useContext(AuthContext);

