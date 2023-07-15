declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production";
            NEXT_PUBLIC_W3C_PID: string;
            NEXT_PUBLIC_ALCHEMY_API_KEY: string;
            NEXT_PUBLIC_NEBULA_BACKEND: string;
        }
    }
}

export {};