declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEST_PORT: string;
    readonly PG_HOST: string;
    readonly PG_PORT: string;
    readonly PG_USER: string;
    readonly PG_PASSWORD: string;
    readonly PG_DATABASE: string;
    readonly REDIS_HOST: string;
    readonly REDIS_PORT: string;
    readonly REDIS_PASSWORD: string;
    readonly REDIS_TTL: string;
  }
}
