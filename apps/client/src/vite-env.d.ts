/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_SCHEMA: string;
  readonly API_HOST: string;
  readonly API_PORT: string;
  readonly CLIENT_PORT: string;
  readonly CHOKIDAR_USE_POLLING: boolean;
}
