/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Project, ProjectData } from "@/types/types";
import { Chip } from "@mui/material";
import useGetProjects from "@/lib/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const [data, loading, error] = useGetProjects() as Project[];

  if (loading) return <h1>Loading</h1>;

  const projects = data;

  return (
    <div
      id='projects'
      className='bg-lightBackground flex flex-col items-center justify-center p-4 shadow-md '>
      <h3 className='text-2xl font-bold text-headline p-2 '>Projects</h3>
      <p className='text-sm text-paragraph font-semibold text-center '>
        {"Kolla in några av de häftiga projekt jag har arbetat på!"}
      </p>
      <div className='grid grid-cols-auto-fit-200 p-4 gap-8 w-full max-w-5xl'>
        {data?.map((project: ProjectData, i: number) => (
          <div key={i} className=' rounded-xl'>
            <div className='relative'>
              <div className=' absolute transition duration-300 opacity:0 hover:opacity-80 hover:bg-black hover:border-2 z-10 flex items-center justify-center w-full h-full group rounded-xl'>
                <Button
                  variant='outlined'
                  className='absolute py-2 px-4 text-paragraph text-lg hover:text-headline border-paragraph hover:border-headline transition duration-300 opacity-0 group-hover:opacity-100 '>
                  <Link href={`/project/${project?.id}`}>Inspect</Link>
                </Button>
              </div>
              <img
                className='aspect-square shadow-xl object-cover rounded-xl'
                src={project?.images[0].thumbnailURL}
                alt={project?.name}
              />
            </div>
            <h3 className='text-headline text-xl font-semibold pb-2'>
              {project?.name}
            </h3>
            <div className='flex gap-2 flex-wrap'>
              {project?.tools.map((item, i) => (
                <Chip
                  key={i}
                  label={item}
                  variant='outlined'
                  className='text-paragraph text- border-greenText'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
