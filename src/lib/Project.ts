import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Project } from '@/types/types';
import { ClientError } from 'graphql-request';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function useGetProject(id: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Project | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!id) return null
        const record = await pb.collection('projects').getOne(id) as Project;
        setData(record);
      } catch (error) {

        setError(error as ClientError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return [data, loading, error];
}
