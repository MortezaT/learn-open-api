import { FC, ReactNode } from 'react';
import { QueryClientProvider } from './components';

export type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <QueryClientProvider>{children}</QueryClientProvider>
);
