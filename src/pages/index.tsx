import Head from "next/head";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";
import BookIcon from "@mui/icons-material/Book";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Language from "@/components/Language";
import Footer from "@/components/Footer";

import { useSessionStorage } from "usehooks-ts";
type Navigation = {
  [keys: string]: {
    name: string;
    href: string;
    current: boolean;
    icon: any;
  }[];
};

const navigation: Navigation = {
  en: [
    {
      name: "Home",
      href: "/",
      current: true,
      icon: <HomeOutlinedIcon fontSize='large' style={{ color: "white" }} />,
    },
    {
      name: "Skills",
      href: "#skills",
      current: false,
      icon: <BookIcon fontSize='large' style={{ color: "white" }} />,
    },
    {
      name: "Projects",
      href: "#projects",
      current: false,
      icon: (
        <ContentPasteOutlinedIcon fontSize='large' style={{ color: "white" }} />
      ),
    },
    {
      name: "Contact",
      href: "#contact",
      current: false,
      icon: (
        <ContactPageOutlinedIcon fontSize='large' style={{ color: "white" }} />
      ),
    },
  ],
  se: [
    {
      name: "Hem",
      href: "/",
      current: true,
      icon: <HomeOutlinedIcon fontSize='large' style={{ color: "white" }} />,
    },
    {
      name: "Kompetens",
      href: "#skills",
      current: false,
      icon: <BookIcon fontSize='large' style={{ color: "white" }} />,
    },
    {
      name: "Projekt",
      href: "#projects",
      current: false,
      icon: (
        <ContentPasteOutlinedIcon fontSize='large' style={{ color: "white" }} />
      ),
    },
    {
      name: "Kontakta mig",
      href: "#contact",
      current: false,
      icon: (
        <ContactPageOutlinedIcon fontSize='large' style={{ color: "white" }} />
      ),
    },
  ],
};

export default function Home() {
  const [language, setLanguage] = useSessionStorage("lang", "");
  const [currentNavigation, setCurrentNavigation] = useState<any>({});
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setCurrentNavigation(navigation[language]);
  }, [language]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Rikard Portfolio</title>
        <meta
          name='description'
          content='Hej där! Kolla gärna in min portfölj för att se vilka projekt jag har skapat. Som fullstackutvecklare har jag byggt allt från responsiva webbsidor till avancerade webbapplikationer. Om du vill veta mer om mig och mina färdigheter, varför inte ta en titt på mina tidigare projekt? Tack för att du besöker min sida!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      {domLoaded && (
        <main>
          {!language ? (
            <Language />
          ) : currentNavigation ? ( // Check if currentNavigation is not null or undefined
            <>
              <Navbar navigation={currentNavigation} />
              <Banner />
              <Skills />
              <Timeline />
              <Projects />
              <Contact />
              <Footer />
            </>
          ) : null}
        </main>
      )}
    </>
  );
}
