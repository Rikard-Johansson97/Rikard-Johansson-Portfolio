/* eslint-disable @next/next/no-img-element */
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import React, { FC } from "react";
import Typed from "react-typed";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className='w-full bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] bg-black border-b-2 border-greenText overflow-hidden pt-12 min-h-[60vh]'>
      <div className='flex flex-col items-start sm:flex-row py-10 px-4 max-w-5xl mx-auto gap-6'>
        <div className='flex flex-col items-start justify-center flex-1 gap-4 '>
          <h3 className='text-sm font-bold text-headline bg-highlight border border-paragraph p-2 rounded-lg shadow-lg animate-fade animate-once'>
            Välkommen till min Portfolio
          </h3>
          <div className='h-16'>
            <Typed
              className='text-3xl font-bold text-headline pt-2 pb-4 animate-fade animate-once'
              strings={[
                "Hej, jag är Rikard - Webbutvecklare",
                "Hej, jag är Rikard - Frontend Utvecklare",
              ]}
              backSpeed={30}
              typeSpeed={80}
              loop
            />
          </div>
          <p className='text-sm text-paragraph animate-fade-up animate-once'>
            Jag brinner för att skapa användbara lösningar och älskar att utmana
            mig själv med nya projekt. Att se mina idéer ta form ger mig stor
            tillfredsställelse och motivation. Jag tror på att alltid sträva
            efter att utvecklas och lära mig nya saker för att bli en bättre
          </p>
        </div>

        <div className='relative flex-1 flex mx-auto items-center justify-center on animate-fade-up max-w-80'>
          <img
            className='rounded-shape shadow-xl drop-shadow-xl max-h-96  mx-auto '
            src='https://i.postimg.cc/brGX8Scp/Banner-Image.png'
            alt='Banner Image'
          />
          <Link
            target='_blank'
            href={"https://www.linkedin.com/in/rikard-johansson-571844249/"}
            className='absolute top-0 left-0 border-2 border-highlight p-4 rounded-full cursor-pointer hover:animate-jump hover:animate-once hover shadow-xl'>
            <LinkedIn
              className=' text-highlight drop-shadow-md'
              fontSize='large'
            />
          </Link>
          <Link
            href={"https://github.com/Rikard-Johansson97"}
            target='_blank'
            className='absolute bottom-0 right-10 border-2 border-highlight p-4 rounded-full cursor-pointer hover:animate-jump hover:animate-once hover shadow-xl'>
            <GitHub
              className=' text-highlight drop-shadow-md'
              fontSize='large'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
