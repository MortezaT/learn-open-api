import axios, { AxiosRequestConfig } from 'axios';

export const AppBaseUrl = `${import.meta.env.VITE_API_SCHEMA}://${
  import.meta.env.VITE_API_HOST
}:${import.meta.env.VITE_API_PORT}`;

export const AxiosConfig: AxiosRequestConfig = {
  baseURL: AppBaseUrl,
};

export const axiosClient = axios.create(AxiosConfig);
