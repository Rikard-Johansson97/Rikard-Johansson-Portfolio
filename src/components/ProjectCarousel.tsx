/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

interface ProjectCarouselProps {}

const ProjectCarousel: FC<ProjectCarouselProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className='flex-1 max-w-5xl mx-auto  max-h-[70vh]'>
      <div className='flex justify-center items-center'>
        <img
          src={props.images[activeIndex].largeURL}
          alt=''
          className='max-h-[50vh] w-full object-cover mx-auto'
        />
      </div>
      <div className='flex gap-2 mt-2' id={props.galleryID}>
        {props.images.map((image, index: number) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target='_blank'
            rel='noreferrer'
            className='flex-1  aspect-square'
            onClick={() => {
              setActiveIndex(index);
            }}>
            <img
              src={image.largeURL}
              alt=''
              className='object-cover w-full h-full'
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
