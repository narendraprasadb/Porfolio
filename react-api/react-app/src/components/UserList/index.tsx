import { useState, useEffect } from 'react';
import { fetchData } from '../../services';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const useFetchUsers = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await fetchData();
        setData(users);
      } catch (error) {
            console.log('Error',error);
      }
    };

    fetchUsers();
  }, []);

  return data;
};
