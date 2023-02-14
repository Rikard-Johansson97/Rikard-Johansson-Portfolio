import React, { FC } from "react";
import Button from "@mui/material/Button";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div
      id='projects'
      className='bg-lightBackground flex flex-col items-center justify-center p-4 shadow-md '>
      <h3 className='text-2xl font-bold text-headline p-2'>Projects</h3>
      <p className='text-sm text-paragraph font-semibold'>
        {"Check out some of the cool projects I've been working on!"}
      </p>
      <div className='grid grid-cols-auto-fit-200 p-4 gap-4 w-full max-w-5xl'>
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div key={i} className=' rounded-xl'>
              <div className='  flex items-center justify-center group'>
                <Button
                  variant='outlined'
                  className='absolute text-paragraph hover:text-headline border-paragraph hover:border-headline transition duration-200 opacity-0 group-hover:opacity-100 '>
                  Inspect
                </Button>
                <div className='bg-black aspect-19/16 w-full h-full shadow-xl'></div>
                {/* IMAGE HERE */}
              </div>
              <h3 className='text-headline text-lg font-semibold'>
                Netflix Clone
              </h3>
              <p className='text-paragraph'>Typescript, Next.js, Tailwind</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
