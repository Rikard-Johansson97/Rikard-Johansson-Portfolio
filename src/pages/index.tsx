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

const navigation = [
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
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rikard Portfolio</title>
        <meta name='description' content='Generated by create next app' />
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
      <main>
        <Navbar navigation={navigation} />
        <Banner />
        <Skills />
        <Timeline />
        <Projects />

        <Contact />
      </main>
    </>
  );
}
