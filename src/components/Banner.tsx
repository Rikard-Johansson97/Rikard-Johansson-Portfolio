/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Typed from "react-typed";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className='w-full bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] bg-black border-b-2 border-greenText overflow-hidden pt-12'>
      <div className='flex flex-col items-start sm:flex-row py-10 px-4 max-w-5xl mx-auto gap-6'>
        <div className='flex flex-col items-start justify-center flex-1 gap-4'>
          <h3 className='text-sm font-bold text-headline bg-highlight border border-paragraph p-2 rounded-lg shadow-lg'>
            Välkommen till min Portfolio
          </h3>
          <div className='h-16'>
            <Typed
              className='text-3xl font-bold text-headline pt-2 pb-4'
              strings={[
                "Hej, jag är Rikard - Webbutvecklare",
                "Hej, jag är Rikard - Frontend Utvecklare",
              ]}
              backSpeed={30}
              typeSpeed={80}
              loop
            />
          </div>
          <p className='text-sm text-paragraph'>
            Jag är en passionerad och målinriktad person som älskar att skapa
            användbara lösningar. Det är min drivkraft som motiverar mig att
            göra mitt bästa. Att bygga något från grunden och se det ta form är
            så jäkla häftigt, och det är verkligen något som jag brinner för.
          </p>
        </div>

        <div className='flex-1 flex w-full items-center justify-center'>
          <img
            className='rounded-shape shadow-xl drop-shadow-xl max-h-80 mx-auto'
            src='https://i.postimg.cc/brGX8Scp/Banner-Image.png'
            alt='Banner Image'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
