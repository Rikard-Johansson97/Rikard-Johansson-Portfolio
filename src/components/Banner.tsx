/* eslint-disable @next/next/no-img-element */
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import Typed from "react-typed";
import { useSessionStorage } from "usehooks-ts";

const Banner: FC = () => {
  const [language, setLanguage] = useSessionStorage("lang", "en");
  const typedStrings =
    language === "en"
      ? [
          "Hi, I'm Rikard, a Web Developer",
          "Hi, I'm Rikard, a Full Stack Developer",
        ]
      : [
          "Hej, jag är Rikard, en Webbutvecklare",
          "Hej, jag är Rikard, en Fullstack Utvecklare",
        ];

  const introText =
    language === "en"
      ? "I'm passionate about creating useful solutions and love to challenge myself with new projects. Seeing my ideas come to life gives me great satisfaction and motivation. I believe in always striving to develop and learn new things to become a better"
      : "Jag brinner för att skapa användbara lösningar och älskar att utmana mig själv med nya projekt. Att se mina idéer ta form ger mig stor tillfredsställelse och motivation. Jag tror på att alltid sträva efter att utvecklas och lära mig nya saker för att bli en bättre";

  return (
    <div className='w-full bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] bg-black border-b-2 border-lightBackground overflow-hidden pt-12 min-h-[50vh]'>
      <div className='flex flex-col items-center sm:flex-row py-10 px-4 max-w-5xl mx-auto gap-6'>
        <div className='flex flex-col items-start justify-center flex-1 gap-4 '>
          <div className='h-16'>
            <Typed
              className='text-2xl font-bold text-headline pt-2 pb-4 animate-fade animate-once'
              strings={typedStrings}
              backSpeed={30}
              typeSpeed={80}
              loop
            />
          </div>
          <p className='text-sm text-paragraph animate-fade-up animate-once'>
            {introText}
          </p>
        </div>

        <div className='relative flex-1 flex mx-auto items-center justify-center on animate-fade-up max-w-80'>
          <img
            className='rounded-shape shadow-xl drop-shadow-xl max-h-96  mx-auto '
            src='https://i.imgur.com/E3KpdN7.png'
            alt='Banner Image'
          />
          <Link
            target='_blank'
            href={"https://www.linkedin.com/in/rikard-johansson-571844249/"}
            className='absolute top-0 left-0 border-2 border-paragraph p-4 rounded-full cursor-pointer hover:animate-jump hover:animate-once hover shadow-xl'>
            <LinkedIn
              className=' text-headline drop-shadow-md'
              fontSize='large'
            />
          </Link>
          <Link
            href={"https://github.com/Rikard-Johansson97"}
            target='_blank'
            className='absolute bottom-0 right-10 border-2 border-paragraph p-4 rounded-full cursor-pointer hover:animate-jump hover:animate-once hover shadow-xl'>
            <GitHub
              className=' text-headline drop-shadow-md'
              fontSize='large'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
