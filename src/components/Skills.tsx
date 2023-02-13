import React, { FC } from "react";
import Carousel from "./Carousel";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className='mx-auto flex flex-col items-center justify-center'>
      <div className=' max-w-5xl bg-lightBackground p-4 text-center border-b-2 shadow-2xl border-highlight sm:border-2 sm:m-8 sm:shadow-xl sm:rounded-2xl'>
        <h3 className='text-xl font-bold text-headline p-2'>Skills</h3>
        <p className='text-paragraph font-semibold text-sm'>
          As a specialized web developer in the MERN stack, I have a strong
          passion for building robust and user-friendly web applications. With
          my hands-on experience in Next.js, TypeScript and Tailwind and my love
          for building and creating, I always aim to deliver high-quality
          results and enhance my skills in the industry.
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default Skills;
