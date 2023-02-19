/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SwipeTwoToneIcon from "@mui/icons-material/SwipeTwoTone";

interface SkillCarouselProps {}

const skills = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    name: "Typescript",
  },
  {
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FN%2Fnext-js-icon-logo-EE302D5DBD-seeklogo.com.png&f=1&nofb=1&ipt=6eac9f337c0c6266cec8f3df471d2c2d5ad647d4a71dfe28c2b31ca68b8c16f0&ipo=images",
    name: "Next.JS",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
    name: "Node.js",
  },
  {
    src: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
    name: "Tailwind",
  },
  {
    src: "https://logonoid.com/images/sass-logo.png",
    name: "Sass",
  },
  {
    src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-1024.png",
    name: "Git",
  },
  {
    src: "https://themacart.com/assets/img/mongodb.png",
    name: "MongoDB",
  },
  {
    src: "https://images.ctfassets.net/hd5embtz2v28/nJXbtrcTF3S9HPsAE3HMR/86679f8f529856223648be4c29afed62/react-redux.png",
    name: "Redux",
  },
  {
    src: "https://www.pnguniverse.com/wp-content/uploads/2021/03/Graphql-911x1024.png",
    name: "GraphQL",
  },
];

const SkillCarousel: FC<SkillCarouselProps> = ({}) => {
  const [drag, setDrag] = useState(false);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      mode: "free-snap",
      loop: true,

      slides: {
        perView: "auto",
        spacing: 50,
      },
      defaultAnimation: {
        duration: 2000,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div
      className={`animate-fade-left rounded-xl shadow-inner border-2 border-greenText py-6 mt-8 mb-4 bg-background overflow-hidden drop-shadow-md cursor-grab ${
        drag && " cursor-grabbing"
      }`}
      onMouseDown={() => setDrag(true)}
      onMouseLeave={() => setDrag(false)}
      onMouseUp={() => setDrag(false)}>
      <div ref={ref} className='keen-slider'>
        <div className='absolute flex flex-col gap-2 items-center justify-center z-10 w-full h-full duration-200 opacity-0 hover:opacity-100 transition-opacity hover:animate-fade  hover:animate-once  hover:animate-ease-in-out  hover:animate-reverse hover:animate-duration-[1000ms] hover:animate-delay-[1000ms]'>
          <p className='text-xl text-headline '>Swipe left or right</p>
          <SwipeTwoToneIcon className='text-white' fontSize='large' />
        </div>
        {skills.map((skill, i) => (
          <div key={i} className='keen-slider__slide flex flex-col justify-end'>
            <img className=' object-contain' src={skill.src} alt={skill.name} />
            <p className='text-xs font-semibold text-paragraph pt-2'>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
