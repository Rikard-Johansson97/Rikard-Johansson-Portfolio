import { useState, useEffect, SetStateAction } from 'react';
import PocketBase from 'pocketbase';
import { Project } from '@/types/types';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function useGetProjects() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Project[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records  = await pb.collection("projects").getFullList(200) as Project[];
        setData(records as Project[]);
      } catch (error) {
        
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
}