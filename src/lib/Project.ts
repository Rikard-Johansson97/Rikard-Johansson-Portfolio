import { useState, useEffect } from 'react';
import { Project, ProjectData } from '@/types/types';
import { useSessionStorage } from 'usehooks-ts';

export default function useGetProject(id: string) {
  const [language, setLanguage] = useSessionStorage("lang", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Project>();

  console.log(language)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/data${language}.json`);
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
