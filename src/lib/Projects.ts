import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Project } from '@/types/types';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function usePocketBaseList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records  = await pb.collection("projects").getFullList(200);
        setData(records  as any);
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