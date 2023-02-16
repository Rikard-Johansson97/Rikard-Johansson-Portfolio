import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Project } from '@/types/types';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function useGetProject(id : string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const record = await pb.collection('projects').getOne(id, {
            expand: 'relField1,relField2.subRelField',
        });
        setData(record  as any);
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