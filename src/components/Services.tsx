import Image from "next/image";
import React, { FC } from "react";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { useSessionStorage } from "usehooks-ts";
import FadeIn from "./FadeIn";

type ServiceType = {
  title: string;
  desc: string;
  icon: JSX.Element;
};

type ServicesType = {
  en: ServiceType[];
  se: ServiceType[];
};

const services: ServicesType = {
  en: [
    {
      title: "Web Development",
      desc: "Let me help you stand out online with custom landing pages that convert and web development services that drive results.",
      icon: <CodeIcon fontSize='large' />,
    },
    {
      title: "UX / UI Design",
      desc: "Elevate your brand and engage your audience with my custom UX/UI design services. Let's enhance your website's user experience together!",
      icon: <DesignServicesIcon fontSize='large' />,
    },
    {
      title: "SEO optimization",
      desc: "Boost your online visibility & grow your business with my SEO services! Optimize your website for search engines & drive more traffic.",
      icon: <SettingsSuggestIcon fontSize='large' />,
    },
  ],
  se: [
    {
      title: "Webbutveckling",
      desc: "Skapar anpassade landningssidor som får kunderna att handla - låt mig hjälpa dig att sticka ut online!",
      icon: <CodeIcon fontSize='large' />,
    },
    {
      title: "UX / UI Design",
      desc: "Med mina anpassade UX/UI design-tjänster kan jag hjälpa dig att höja din varumärkesprofil och engagera din publik på din webbplats",
      icon: <DesignServicesIcon fontSize='large' />,
    },
    {
      title: "SEO-optimering",
      desc: "Få synlighet på nätet med mina SEO-tjänster! Jag optimerar din webbplats för sökmotorer och drar mer trafik till din sida.",
      icon: <SettingsSuggestIcon fontSize='large' />,
    },
  ],
};

const Services: FC = ({}) => {
  const [language, setLanguage] = useSessionStorage("lang", "en");
  console.log(services[language as keyof typeof services]);

  return (
    <>
      <div className='flex flex-wrap max-w-5xl mx-auto items gap-4 p-4'>
        {services[language as keyof typeof services]?.map((service, i) => (
          <FadeIn key={i}>
            <div className='flex flex-col justify-center text-headline sm:max-w-xs mx-auto sm:flex-1 px-4 py-10 bg-lightBackground rounded-md shadow'>
              <div className='text-center flex-1'>
                {service.icon}
                <h3 className='text-xl font-bold mt-4 mb-2'>{service.title}</h3>
                <p className='text-paragraph'>{service.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </>
  );
};

export default Services;
