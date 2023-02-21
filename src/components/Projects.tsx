/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Project, ProjectData } from "@/types/types";
import { Chip } from "@mui/material";
import useGetProjects from "@/lib/Projects";
import FadeIn from "./FadeIn";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const [data, loading, error] = useGetProjects() as Project[];

  if (loading) return <h1>Loading</h1>;

  console.log(JSON.stringify(data));

  return (
    <div
      id='projects'
      className='bg-background flex flex-col items-center justify-center px-4 -mt-4 pt-4'>
      <h3 className='text-2xl font-bold text-headline p-2 '>Projekt</h3>
      <p className='text-sm text-paragraph text-center '>
        Ta en titt på några av de projekt jag har gjort!
      </p>
      <div className='grid grid-cols-auto-fit-200 p-4 gap-4 w-full max-w-5xl '>
        {data?.map((project: ProjectData, i: number) => (
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
                  {project?.tools.slice(0, 2).map((item, i) => (
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
