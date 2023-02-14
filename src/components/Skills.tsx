import React, { FC } from "react";
import SkillCarousel from "./SkillCarousel";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div
      id='skills'
      className='mx-auto flex flex-col items-center justify-center shadow-2xl p-4'>
      <div className=' max-w-5xl bg-lightBackground text-center'>
        <h3 className='text-xl font-bold text-headline p-2'>Skills</h3>
        <p className='text-paragraph font-semibold text-sm'>
          As a specialized web developer in the MERN stack, I have a strong
          passion for building robust and user-friendly web applications. With
          my hands-on experience in Next.js, TypeScript and Tailwind and my love
          for building and creating, I always aim to deliver high-quality
          results and enhance my skills in the industry.
        </p>
        <SkillCarousel />
      </div>
    </div>
  );
};

export default Skills;
