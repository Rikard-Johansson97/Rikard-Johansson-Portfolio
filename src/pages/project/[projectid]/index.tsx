import ProjectCarousel from "@/components/ImageGallery";
import useGetProject from "@/lib/Project";
import { Chip, IconButton } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { Project } from "@/types/types";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import Navbar from "@/components/Navbar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Index: NextPage = () => {
  const router = useRouter();
  const { projectid } = router.query;

  const [data, loading, error] = useGetProject(projectid as string) as Project;

  if (loading) return <h1>Loading...</h1>;

  const navigation = [
    {
      name: "Home",
      href: "/",
      current: true,
      icon: <HomeOutlinedIcon fontSize='large' style={{ color: "white" }} />,
    },
    {
      name: "Website",
      href: data?.domain ? data.domain : "/",
      current: true,
      icon: data?.domain ? (
        <Link href={data?.domain} target='_blank'>
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

  const html: string = data?.description;

  return (
    <>
      <Navbar navigation={navigation} />
      <div className='flex-1 mx-auto bg-background '>
        <div className='bg-background max-w-5xl py-16  mx-auto px-8'>
          {data?.images && (
            <ProjectCarousel
              galleryID='my-test-gallery'
              images={data?.images}
              poster={data?.poster}
            />
          )}
          <div className='mt-4 flex flex-col  items-start  rounded animate-fade-up mx-auto bg-background'>
            <div className='flex '>
              {data?.github && (
                <IconButton>
                  <Link href={data?.github} target='_blank'>
                    <GitHubIcon
                      fontSize='large'
                      className='text-greenText cursor-pointer'
                    />
                  </Link>
                </IconButton>
              )}
              {data?.domain ? (
                <IconButton>
                  <Link href={data?.domain} target='_blank'>
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
            <h2 className='text-2xl text-headline font-bold'>{data?.name}</h2>
            <div className='flex py-4 gap-2 flex-wrap'>
              {data?.tools?.map((tool: string, i: number) => (
                <FadeIn key={i}>
                  <p
                    key={i}
                    className='text-paragraph font-semibold text-xs border-greenText shadow-md px-2 py-1 border-2 rounded-full'>
                    {tool}
                  </p>
                </FadeIn>
              ))}
            </div>

            <div className='text-paragraph'>{data?.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
