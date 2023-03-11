import { Project } from "@/types/types";
import { useSessionStorage } from "usehooks-ts";

export interface ProjectData {
  projectsSE: Project[];
  projectsEN: Project[];
}

export async function getProjects(): Promise<ProjectData> {
  const resSE = await fetch(`http://localhost:3000/datase.json`);
  const resEN = await fetch(`http://localhost:3000/dataen.json`);

  if (!resSE.ok) {
    throw new Error(
      `Failed to fetch projects: ${resSE.status} ${resSE.statusText}`
    );
  }

  if (!resEN.ok) {
    throw new Error(
      `Failed to fetch projects: ${resEN.status} ${resEN.statusText}`
    );
  }

  const projectsSE: Project[] = await resSE.json();
  const projectsEN: Project[] = await resEN.json();

  const projectData: ProjectData = {
    projectsSE,
    projectsEN,
  };

  return projectData;
}
