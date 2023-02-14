/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Typed from "react-typed";

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className='w-full bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] bg-black border-b-2 border-greenText overflow-hidden'>
      <div className='flex flex-col items-start sm:flex-row py-10 px-4 max-w-5xl mx-auto gap-6'>
        <div className='flex flex-col items-start justify-between flex-1 gap-4'>
          <h3 className='text-sm font-bold text-headline bg-highlight border border-paragraph p-2 rounded-lg shadow-lg'>
            Välkommen till min Portfolio
          </h3>
          <Typed
            className='text-3xl font-bold text-headline pt-2 pb-4'
            strings={[
              "Hej, jag är Rikard en Webbutvecklare",
              "Hej, jag är Rikard en Frontend Utvecklare",
            ]}
            backSpeed={30}
            typeSpeed={80}
            loop
          />
          <p className='text-sm text-paragraph'>
            Jag är en målinriktad och ambitiös utvecklare som brinner för att
            skapa användbara verktyg som kan göra skillnad för andra människor.
            Det är det som driver mig och får mig att vilja göra mitt bästa
            varje dag. Att skapa något från grunden och se det ta form är något
            som jag älskar att göra.
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
