import React, { FC, useState } from "react";
import Image from "next/image";
import { useSessionStorage } from "usehooks-ts";

const Language: FC = () => {
  const [language, setLanguage] = useSessionStorage("lang", "en");
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://i.imgur.com/uPmowmp.jpg"
  );

  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("se");
      setSelectedImage("https://i.imgur.com/nzNijYZ.jpg");
    } else {
      setLanguage("en");
      setSelectedImage("https://i.imgur.com/uPmowmp.jpg");
    }
  };

  return (
    <div className='absolute top-5 sm:top-auto right-2'>
      <button className='bg-transparent border-none' onClick={toggleLanguage}>
        <Image
          src={selectedImage}
          height={18}
          width={30}
          alt={language === "en" ? "English" : "Swedish"}
          className='aspect-video mt-1'
          onClick={() => {
            setLanguage(language === "en" ? "se" : "en");
            setSelectedImage(
              language === "en"
                ? "https://i.imgur.com/nzNijYZ.jpg"
                : "https://i.imgur.com/uPmowmp.jpg"
            );
          }}
        />
      </button>
    </div>
  );
};

export default Language;
