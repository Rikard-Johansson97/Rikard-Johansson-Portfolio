import FadeIn from "@/components/FadeIn";
import ProjectCarousel from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import { getProjects, ProjectData } from "@/lib/getProjects";
import { getServerSideProps } from "@/pages";
import { Project } from "@/types/types";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import { IconButton } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSessionStorage } from "usehooks-ts";

interface Props {
  projects: ProjectData;
}

const Index = ({ projects }: Props) => {
  const router = useRouter();
  const [language, setLanguage] = useSessionStorage("lang", "en");
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    setProjectsData(
      language === "en" ? projects.projectsEN : projects.projectsSE
    );
  }, [language]);

  const project = projectsData.find(
    (project) => project.id === router.query.projectid
  );

  const navigation = [
    {
      name: "Home",
      href: "/",
      current: true,
      icon: <HomeOutlinedIcon fontSize='large' style={{ color: "white" }} />,
    },
    {
      name: "Website",
      href: project?.domain ? project.domain : "/",
      current: true,
      icon: project?.domain ? (
        <Link href={project?.domain} target='_blank'>
          <LinkIcon fontSize='large' className='text-headline cursor-pointer' />
        </Link>
      ) : (
        <LinkOffIcon
          fontSize='large'
          className='text-headline cursor-not-allowed'
        />
      ),
    },
  ];

  return (
    <>
      <Navbar navigation={navigation} />
      <div className='flex-1 mx-auto bg-background '>
        <div className='bg-background max-w-5xl py-16  mx-auto px-8'>
          {project?.images && (
            <ProjectCarousel
              galleryID='my-test-gallery'
              images={project?.images}
              poster={project?.poster}
            />
          )}
          <div className='mt-4 flex flex-col  items-start  rounded animate-fade-up mx-auto bg-background'>
            <div className='flex '>
              {project?.github && (
                <IconButton>
                  <Link href={project?.github} target='_blank'>
                    <GitHubIcon
                      fontSize='large'
                      className='text-greenText cursor-pointer'
                    />
                  </Link>
                </IconButton>
              )}
              {project?.domain ? (
                <IconButton>
                  <Link href={project?.domain} target='_blank'>
                    <LinkIcon
                      fontSize='large'
                      className='text-greenText cursor-pointer'
                    />
                  </Link>
                </IconButton>
              ) : (
                <IconButton>
                  <LinkOffIcon
                    fontSize='large'
                    className='text-greenText cursor-not-allowed'
                  />
                </IconButton>
              )}
            </div>
            <h2 className='text-2xl text-headline font-bold'>
              {project?.name}
            </h2>
            <div className='flex py-4 gap-2 flex-wrap'>
              {project?.tools?.map((tool: string, i: number) => (
                <FadeIn key={i}>
                  <p
                    key={i}
                    className='text-paragraph font-semibold text-xs border-greenText shadow-md px-2 py-1 border-2 rounded-full'>
                    {tool}
                  </p>
                </FadeIn>
              ))}
            </div>

            <div className='text-paragraph'>{project?.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

export { getServerSideProps };
