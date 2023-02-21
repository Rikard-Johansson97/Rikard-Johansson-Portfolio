import React, { FC } from "react";
import SkillCarousel from "./SkillCarousel";
import FadeIn from "./FadeIn";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div
      id='skills'
      className='mx-auto flex flex-col items-center justify-center p-4 bg-background'>
      <FadeIn>
        <div className='max-w-5xl  text-center'>
          <h3 className='text-xl font-bold text-headline p-2'>
            Min tekniska kompetens
          </h3>
          <p className='text-paragraph text-sm mx-8 sm:mx-0'>
            Jag är en MERN-stack webbutvecklare med praktisk erfarenhet inom
            flera tekniker, inklusive Next.js, TypeScript och Tailwind. Min
            nyfikenhet och öppenhet för nya tekniker gör mig till en flexibel
            och mångsidig utvecklare som alltid strävar efter att uppnå bästa
            möjliga resultat i mina projekt.
          </p>
          <SkillCarousel />
        </div>
      </FadeIn>
    </div>
  );
};

export default Skills;
