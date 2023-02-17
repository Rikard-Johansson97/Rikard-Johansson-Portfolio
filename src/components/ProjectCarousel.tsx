/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
interface ProjectCarouselProps {
  galleryID: string;
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
  }[];
}

const ProjectCarousel: FC<ProjectCarouselProps> = ({ galleryID, images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className=' max-w-5xl mx-auto '>
      <div className='flex justify-center h-[50vh] items-center  p-4'>
        <img
          src={images[activeIndex].largeURL}
          alt=''
          className='h-full w-full object-contain mx-auto rounded-xl'
        />
      </div>
      <div className='flex gap-2 mt-2' id={galleryID}>
        {images.map((image, index: number) => (
          <div
            key={galleryID + "-" + index}
            onClick={() => {
              setActiveIndex(index);
            }}>
            <Image
              src={image.largeURL}
              alt='Thumbnail'
              width={image.width}
              height={image.height}
              className='object-contain w-full h-full flex-1 shadow-lg border-2 rounded-md cursor-pointer duration-200 hover:border-greenText '
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
