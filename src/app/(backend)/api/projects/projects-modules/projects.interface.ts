export type TTackstack ={
    id:string; 
    text: string
};


export interface TProject {
    title: string; 
    tackstack?: TTackstack[];
    tagline?: string;
    image: string; 
    publicId: string; 
    summary?: string;
    projectLink?: string;
    desc: string; 
};