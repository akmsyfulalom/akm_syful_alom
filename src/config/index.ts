interface IConfig {
    MONGODB_URI: string; 
};

const config: IConfig = {
    MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI || ""
}


export default config; 