/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
interface ProjectCarouselProps {
  galleryID: string;
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
    display: string;
  }[];
  poster: string;
}

const ImageGallery: FC<ProjectCarouselProps> = ({
  galleryID,
  images,
  poster,
}) => {
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
    <div className=' max-w-5xl mx-auto'>
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

      <div className='flex justify-center h-[50vh] items-center shadow-md p-4 bg-lightBackground rounded-md'>
        {images[activeIndex]?.largeURL ? (
          <Image
            onClick={() => setShowImage(!showImage)}
            src={images[activeIndex].largeURL}
            height={images[activeIndex].height}
            width={images[activeIndex].width}
            alt='Full-image'
            className='h-full w-full object-contain mx-auto rounded-xl drop-shadow-lg animate-fade cursor-zoom-in'
          />
        ) : (
          <Image
            src={poster}
            height={1000}
            width={1000}
            alt='Full-image'
            className='h-full w-full object-contain mx-auto rounded-xl drop-shadow-lg animate-fade'
          />
        )}
      </div>
      <div className='flex gap-2 mt-2' id={galleryID}>
        {images.map((image, index: number) => (
          <div
            className='flex flex-col  bg-lightBackground p-2 rounded-md shadow-md hover:brightness-125 duration-200 cursor-pointer flex-1'
            key={galleryID + "-" + index}
            onClick={() => {
              setActiveIndex(index);
            }}>
            <div className='p-2 text-center '>
              {image.display === "Mobile" && (
                <PhoneIphoneOutlinedIcon style={{ color: "white" }} />
              )}
              {image.display === "Desktop" && (
                <DesktopWindowsOutlinedIcon style={{ color: "white" }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
