import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider as QueryClientProvider_ } from '@tanstack/react-query';

export type QueryClientProviderProps = {
  children?: ReactNode;
};

const client = new QueryClient();

export const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => (
  <QueryClientProvider_ client={client}>{children}</QueryClientProvider_>
);
