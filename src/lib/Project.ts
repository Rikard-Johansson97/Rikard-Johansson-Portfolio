import { useState, useEffect } from 'react';
import { Project, ProjectData } from '@/types/types';

export default function useGetProject(id: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Project>();

  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data.json');
        const projects = await res.json();
        const record = projects.find((project : ProjectData) => project.id === id);
        setData(record as Project);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return [data, loading, error];
}
