import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = async () => {
  const response = await axios.get('http://localhost:4000/users');
  return response.data;
};

const RQSuperherosPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h3>RQ Super Heroes</h3>
      {data.map((user) => (
        <p key={user?.id}>{user?.name}</p>
      ))}
    </div>
  );
};

export default RQSuperherosPage;
