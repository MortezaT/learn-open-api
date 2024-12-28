/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_SCHEMA: string;
  readonly VITE_API_HOST: string;
  readonly VITE_API_PORT: string;
  readonly VITE_CLIENT_PORT: string;
  readonly VITE_CHOKIDAR_USE_POLLING: boolean;
}
