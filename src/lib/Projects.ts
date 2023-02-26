import { useState, useEffect } from 'react';
import { Project } from '@/types/types';
import { useSessionStorage } from 'usehooks-ts';

export default function useGetProjects() {
  const [language, setLanguage] = useSessionStorage("lang", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Project[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/data${language}.json`);
        const records = await res.json();
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
