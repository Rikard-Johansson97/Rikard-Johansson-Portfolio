import Projects from "@/components/Projects";
import { ProjectData } from "@/lib/getProjects";
import { Project } from "@/types/types";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";
import { getServerSideProps } from "..";

interface Props {
  projects: ProjectData;
}

const Index = ({ projects }: Props) => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [language, setLanguage] = useSessionStorage("lang", "en");

  useEffect(() => {
    setProjectsData(
      language === "en" ? projects.projectsEN : projects.projectsSE
    );
  }, [language]);

  return (
    <div className='mt-10'>
      <Projects projects={projectsData} />
    </div>
  );
};

export default Index;

export { getServerSideProps };
