import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { todosApi } from '../../api/todosApi';

export const Todos: FC = () => {
  const id = 'fake';
  const { isLoading, error, data } = useQuery({
    queryKey: ['todos', '1'],
    queryFn: () => todosApi.todosControllerFindOne({ id }),
  });

  if (isLoading) return <div>Loading ...</div>;

  return error ? <div>Error!</div> : <div>{data?.data.title}</div>;
};
