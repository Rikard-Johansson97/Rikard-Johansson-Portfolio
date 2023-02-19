/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface ProjectCarouselProps {
  galleryID: string;
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
  }[];
}

const ImageGallery: FC<ProjectCarouselProps> = ({ galleryID, images }) => {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (showImage) setShowImage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showImage]);

  return (
    <div className=' max-w-5xl mx-auto p-4'>
      {showImage && (
        <div
          className='absolute flex justify-center items-center duration-300 transition-all bg-black bg-opacity-80 h-full w-full top-0 left-0 z-50 p-4'
          onClick={() => setShowImage(!showImage)}>
          <div className='text-end cursor-pointer'>
            <CloseIcon
              fontSize='large'
              className='text-paragraph hover:text-headline '
            />
            <Image
              src={images[activeIndex].largeURL}
              height={images[activeIndex].height}
              width={images[activeIndex].width}
              alt='Full-image'
              className='max-h-[90vh] w-full object-contain mx-auto rounded-xl drop-shadow-lg cursor-zoom-out'
            />
          </div>
        </div>
      )}

      <div className='flex justify-center h-[50vh] items-center  p-4 cursor-zoom-in'>
        <Image
          onClick={() => setShowImage(!showImage)}
          src={images[activeIndex].largeURL}
          height={images[activeIndex].height}
          width={images[activeIndex].width}
          alt='Full-image'
          className='h-full w-full object-contain mx-auto rounded-xl drop-shadow-lg animate-fade'
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
              className='object-contain w-full h-full flex-1 shadow-lg border-2 rounded-md cursor-pointer duration-200 hover:border-greenText animate-fade'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
