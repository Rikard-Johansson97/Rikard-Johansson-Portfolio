import React, { FC } from "react";
import FadeIn from "./FadeIn";

const timelineItems = [
  {
    date: "oktober 2020",
    title: "Min kodresas början 🤩",
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
    title: "Håller mig ständigt uppdaterad för att bli en bättre Utvecklare 👨‍💻",
    description:
      "I nuläget letar jag efter jobbmöjligheter där jag kan använda mina färdigheter och fortsätta att växa som utvecklare.",
  },
];

interface TimelineProps {}

const Timeline: FC<TimelineProps> = ({}) => {
  return (
    <div className='px-8 max-w-5xl mx-auto'>
      <h3 className='text-xl text-center font-bold text-headline py-2'>
        Min utvecklingsresa
      </h3>
      <p className='text-sm text-center font-bold text-paragraph pb-5'>
        Denna tidslinje visar min utbildnings- och utvecklingsresa som
        programmerare. Från min första kodresa på egen hand till bootcamp på
        TechOver Academy. Nedan kan du se några av mina stora prestationer och
        lärdomar på min resa.
      </p>
      <ol className='relative border-l border-greenText'>
        {timelineItems.map((item) => (
          <FadeIn key={item.date}>
            <li className='mb-10 ml-4'>
              <div className='absolute w-3 h-3 bg-greenText rounded-full mt-1.5 -left-1.5 border-2 border-headline'></div>
              <time className='mb-1 text-sm font-normal leading-none text-paragraph'>
                {item.date}
              </time>
              <h3 className='text-lg font-semibold text-headline '>
                {item.title}
              </h3>
              <p className='mb-4 text-base font-normal text-paragraph'>
                {item.description}
              </p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
