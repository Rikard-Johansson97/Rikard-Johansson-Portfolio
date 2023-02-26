import React, { FC } from "react";
import { useSessionStorage } from "usehooks-ts";
import FadeIn from "./FadeIn";

type TimelineItems = {
  [key: string]: { date: string; title: string; description: string }[];
};

const timelineItems: TimelineItems = {
  en: [
    {
      date: "oktober 2021",
      title: "The beginning of my coding journey 🤩",
      description:
        "I started learning programming on my own alongside my previous job as a carpenter, focusing on learning the basics of HTML, CSS, and JavaScript.",
    },
    {
      date: "June 2022",
      title: "Started my studies at NTI-school 🥳",
      description:
        "I started at NTI and took the Programming 1 course where I learned C-Sharp, pseudocode, and activity diagrams. The course ran between June and August 2022.",
    },
    {
      date: "October 2022",
      title: "Bootcamp at TechOver Academy 🎉",
      description:
        "I participated in a bootcamp at TechOver Academy where I learned various frameworks and techniques in the MERN stack. During the bootcamp, I gained a deep understanding of frontend and backend development, and had the opportunity to develop my skills through project work and guidance from experienced instructors. Through this bootcamp, I not only gained a strong foundation in web development but also had the opportunity to work with like-minded developers.",
    },
    {
      date: "Current",
      title: "Keeping myself updated to become a better Developer 👨‍💻",
      description:
        "Currently, I am looking for job opportunities where I can use my skills and continue to grow as a developer.",
    },
  ],
  se: [
    {
      date: "oktober 2021",
      title: "Starten på min kodningsresa 🤩",
      description:
        "Jag började lära mig programmering på egen hand vid sidan av mitt tidigare jobb som snickare, och satsade på att lära mig grunderna i HTML, CSS och JavaScript.",
    },
    {
      date: "Juni 2022",
      title: "Kursstart på NTI-skolan 🥳",
      description:
        "Jag började på NTI och tog kursen Programming 1 där jag fick lära mig C-Sharp, pseudokod och aktivitetsdiagram. Kursen pågick mellan juni och augusti 2022",
    },
    {
      date: "Oktober 2022",
      title: "Bootcamp på TechOver Academy 🎉",
      description:
        "Jag deltog i en bootcamp på TechOver Academy där jag fick lära mig olika ramverk och tekniker i MERN-stacken. Under bootcampen fick jag en djupgående förståelse för frontend- och backend-utveckling, och jag fick möjlighet att utveckla mina färdigheter genom projektarbeten och handledning från erfarna instruktörer. Genom denna bootcamp fick jag inte bara en stark grund i webbutveckling utan även möjlighet att arbeta med andra likasinnade utvecklare.",
    },
    {
      date: "Nutid ",
      title:
        "Håller mig ständigt uppdaterad för att bli en bättre Utvecklare 👨‍💻",
      description:
        "I nuläget letar jag efter jobbmöjligheter där jag kan använda mina färdigheter och fortsätta att växa som utvecklare.",
    },
  ],
};

interface TimelineProps {}

const Timeline: FC<TimelineProps> = ({}) => {
  const [language, setLanguage] = useSessionStorage("lang", "");
  return (
    <div className='pl-4 pt-10 max-w-5xl mx-auto bg-background'>
      <h3 className='text-xl text-center font-bold text-headline py-2'>
        {language === "se" ? "Min utvecklings resa" : "My Developer journey"}
      </h3>
      <p className='text-sm text-center text-paragraph pb-5 '>
        {language === "se"
          ? "Denna tidslinje visar min resa inom utbildning och utveckling som programmerare. Från min första programmering på egen hand till bootcampen på TechOver Academy. Nedan kan du se några av mina större prestationer och lärdomar på min resa."
          : "This timeline showcases my journey in education and development as a programmer. From my first coding journey on my own to the bootcamp at TechOver Academy. Below, you can see some of my major achievements and learnings on my journey."}
      </p>
      <ol className='relative border-l border-greenText '>
        {language &&
          timelineItems[language].map((item) => (
            <FadeIn key={item.date}>
              <div className='bg-lightBackground rounded-lg m-4 p-2 shadow-lg'>
                <li className='mb-4 ml-4'>
                  <div className='absolute w-3 h-3 bg-greenText rounded-full mt-1.5 -left-1.5 border-2 border-headline'></div>
                  <time className='mb-1 text-xs font-normal leading-none text-paragraph'>
                    {item.date}
                  </time>
                  <h3 className='text-base font-bold text-headline '>
                    {item.title}
                  </h3>
                  <p className='mb-4 text-sm text-paragraph '>
                    {item.description}
                  </p>
                </li>
              </div>
            </FadeIn>
          ))}
      </ol>
    </div>
  );
};

export default Timeline;
