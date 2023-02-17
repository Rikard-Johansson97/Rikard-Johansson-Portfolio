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
          Jag är en specialiserad webbutvecklare inom MERN-stacken. Jag har
          praktisk erfarenhet av flera tekniker inklusive Next.js, TypeScript,
          Tailwind och flera andra moderna verktyg. Jag är inte rädd för att
          testa nya tekniker och tillvägagångssätt för att uppnå bästa möjliga
          resultat i mina projekt. Mitt engagemang och nyfikenhet på nya
          tekniker och trender gör mig till en ännu mer mångsidig och flexibel
          utvecklare.
        </p>
        <SkillCarousel />
      </div>
    </div>
  );
};

export default Skills;
