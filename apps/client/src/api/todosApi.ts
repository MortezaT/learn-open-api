import { AppBaseUrl, axiosClient } from './axios-client';
import { TodosApi } from './generated';

export const todosApi = new TodosApi(
  { basePath: AppBaseUrl, isJsonMime: () => false },
  undefined,
  axiosClient
);
