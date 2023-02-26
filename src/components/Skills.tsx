import React, { FC } from "react";
import SkillCarousel from "./SkillCarousel";
import FadeIn from "./FadeIn";
import { useSessionStorage } from "usehooks-ts";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const [language, setLanguage] = useSessionStorage("lang", "");
  return (
    <div
      id='skills'
      className='mx-auto flex flex-col items-center justify-center p-4 pt-10 bg-background'>
      <FadeIn>
        <div className='max-w-5xl  text-center'>
          <h3 className='text-xl font-bold text-headline p-2'>
            {language === "se" ? "Teknisk kompetens" : "Skills"}
          </h3>
          <p className='text-paragraph text-sm mx-8 sm:mx-0'>
            {language === "se"
              ? "Jag är en fullstack-utvecklare med en bred kompetens inom webbutveckling. Jag är van vid att arbeta med flera teknologier och plattformar, inklusive front-end, back-end och databaser. Med min erfarenhet och min förmåga att lära mig nya teknologier snabbt, kan jag utveckla högkvalitativa och innovativa lösningar för att uppfylla dina krav och behov."
              : "I am a fullstack developer with a broad skillset in web development. I am experienced in working with multiple technologies and platforms, including front-end, back-end, and databases. With my experience and ability to quickly learn new technologies, I can develop high-quality and innovative solutions to meet your requirements and needs."}
          </p>
          <SkillCarousel />
        </div>
      </FadeIn>
    </div>
  );
};

export default Skills;
