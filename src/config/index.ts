interface Config {
    MONGODB_URI: string; 
};

const config: Config = {
    MONGODB_URI: process.env.NEXT_PUBLIC_MONGODB_URI || ""
}
console.log("🚀 ~ config:", config)

export default config; 