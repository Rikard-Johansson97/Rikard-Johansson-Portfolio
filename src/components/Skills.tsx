import React, { FC } from "react";
import SkillCarousel from "./SkillCarousel";
import FadeIn from "./FadeIn";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className='mx-auto flex flex-col items-center justify-center p-4'>
      <FadeIn>
        <div className='max-w-5xl bg-lightBackground text-center'>
          <h3 className='text-xl font-bold text-headline p-2'>
            Min tekniska kompetens
          </h3>
          <p className='text-paragraph font-semibold text-sm'>
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
