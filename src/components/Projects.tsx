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
      className='bg-lightBackground flex flex-col items-center justify-center px-4 '>
      <h3 className='text-2xl font-bold text-headline p-2 '>Projekt</h3>
      <p className='text-sm text-paragraph font-semibold text-center '>
        Ta en titt på några av de projekt jag har gjort!
      </p>
      <div className='grid grid-cols-auto-fit-200 p-4 gap-12 w-full max-w-5xl'>
        {data?.map((project: ProjectData, i: number) => (
          <FadeIn key={i}>
            <Link href={`/project/${project?.id}`}>
              <div className=' rounded-xl'>
                <div className='relative'>
                  <div className=' absolute transition duration-200 opacity:0 hover:opacity-80 hover:bg-black hover:border-2 hover:border-greenText z-10 flex items-center justify-center w-full h-full group rounded-xl'>
                    <button
                      style={{ color: "white" }}
                      className='absolute py-2 px-4 text-paragraph text-lg border-2 rounded-lg hover:text-headline border-paragraph hover:border-headline transition duration-300 opacity-0 group-hover:opacity-100 '>
                      <Link href={`/project/${project?.id}`}>See More</Link>
                    </button>
                  </div>

                  <img
                    className='aspect-square shadow-xl object-cover rounded-xl'
                    src={project?.poster}
                    alt={project?.name}
                  />
                </div>
                <h3 className='text-headline text-xl font-semibold pb-2'>
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
