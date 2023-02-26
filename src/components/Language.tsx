import Image from "next/image";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useSessionStorage } from "usehooks-ts";

const Language: FC = () => {
  const [language, setLanguage] = useSessionStorage("lang", "");
  return (
    <div className='bg-lightBackground h-screen flex justify-center items-center'>
      <div className=' flex items-center flex-col justify-center bg-background max-w-2xl w-full max-h-96 h-full rounded-lg shadow-xl'>
        <h2 className='text-3xl text-headline font-bold text-center mb-10'>
          Choose a Language
        </h2>
        <div className=' flex justify-evenly items-start w-full'>
          <div
            onClick={() => {
              setLanguage("en");
            }}
            className='bg-lightBackground p-4 rounded-md shadow-xl duration-300 hover:brightness-125 cursor-pointer'>
            <Image
              src={"https://i.imgur.com/uPmowmp.jpg"}
              height={96}
              width={156}
              alt={"swedish"}
              className='aspect-video'></Image>
            <h3 className='text-2xl text-headline text-center'>English</h3>
          </div>
          <div
            className='bg-lightBackground p-4 rounded-md shadow-xl duration-300 hover:brightness-125 cursor-pointer'
            onClick={() => {
              setLanguage("se");
            }}>
            <Image
              src={"https://i.imgur.com/nzNijYZ.jpg"}
              height={96}
              width={156}
              alt={"swedish"}
              className='object-cover aspect-video'></Image>
            <h3 className='text-2xl text-headline text-center'>Swedish</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
