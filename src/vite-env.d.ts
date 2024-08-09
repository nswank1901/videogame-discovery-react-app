/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RAWG_API_KEY: string;
    // add other environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }