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
import Services from "@/components/Services";
import { Project } from "@/types/types";
import { getProjects, ProjectData } from "@/lib/getProjects";
import { GetServerSidePropsContext } from "next";

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
  const [currentNavigation, setCurrentNavigation] = useState<any>([]);
  const [language, setLanguage] = useSessionStorage("lang", "en");
  const [projectsData, setProjectsData] = useState<Project[]>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchProjects = async () => {
    const projects = await getProjects();
    setProjectsData(
      language === "en" ? projects.projectsEN : projects.projectsSE
    );
  };

  useEffect(() => {
    setCurrentNavigation(navigation[language]);
    fetchProjects();
  }, [language]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!language) return;

  return (
    <>
      <Head>
        <title>Rikard Portfolio</title>
        <meta
          name='description'
          content='Hej där! Kolla gärna in min portfölj för att se vilka projekt jag har skapat'
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
      {loaded && (
        <main>
          <>
            <Navbar navigation={currentNavigation} />
            <Banner language={language} />
            <Skills />
            {/* <Services /> */}
            <Timeline />
            <Projects projects={projectsData} />
            <Contact />
            <Footer />
          </>
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const projects = await getProjects();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
