/* eslint-disable @next/next/no-img-element */
import { getProjects } from "@/lib/getProjects";
import { Project } from "@/types/types";
import Link from "next/link";
import { FC } from "react";
import { useSessionStorage } from "usehooks-ts";
import FadeIn from "./FadeIn";

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [language, setLanguage] = useSessionStorage("lang", "en");
  return (
    <div
      id='projects'
      className='bg-background flex flex-col items-center justify-center px-4 -mt-4 py-10'>
      <h3 className='text-2xl font-bold text-headline p-2 '>
        {language === "se" ? "Projekt" : "Projects"}
      </h3>
      <p className='text-sm text-paragraph text-center '>
        {language === "se"
          ? "Ta en titt på några av de projekt jag har gjort!"
          : "Check out some of my projects!"}
      </p>
      <div className='grid grid-cols-auto-fit-200 p-4 gap-4 w-full max-w-5xl '>
        {projects?.map((project: Project, i: number) => (
          <FadeIn key={i}>
            <Link href={`/project/${project?.id}`}>
              <div className=' rounded-xl bg-lightBackground p-3 duration-200 hover:brightness-125'>
                <div className='relative'>
                  <img
                    className='aspect-square shadow-xl object-cover rounded-xl'
                    src={project?.poster}
                    alt={project?.name}
                  />
                </div>
                <h3 className='text-headline text-xl font-semibold py-2'>
                  {project?.name}
                </h3>
                <div className='flex gap-2 flex-wrap'>
                  {project?.tools.slice(0, 2).map((item: any, i: number) => (
                    <p
                      key={i}
                      className='text-paragraph font-semibold text-xs border-greenText shadow-md px-2 py-1 border-2 rounded-full'>
                      {item}
                    </p>
                  ))}
                  <p className='text-paragraph font-bold text-xs border-greenText shadow-md px-2 py-1 border-2 rounded-full'>
                    {"+ " + String(project?.tools.length - 2)}
                  </p>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
