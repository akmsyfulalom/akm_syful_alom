export interface TUserLogin {
    email: string;
    password: string;
  }
  export interface TUserRegister {
    name:string;
    tagline:string;
    email: string;
    password: string;
    role:   'admin' | 'user' 
  }
  
  