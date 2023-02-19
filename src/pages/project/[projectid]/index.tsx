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

const Index: NextPage = () => {
  const router = useRouter();
  const { projectid } = router.query;

  const [data, loading, error] = useGetProject(projectid as string) as Project;

  if (loading) return <h1>Loading...</h1>;

  const html: string = data?.description;

  return (
    <div className='flex-1  mx-auto bg-black bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] py-10 '>
      {data?.images && (
        <ProjectCarousel galleryID='my-test-gallery' images={data?.images} />
      )}
      <div className='mt-4 flex flex-col max-w-5xl items-start bg-background p-4  border-2 border-greenText shadow-xl rounded animate-fade-up mx-4'>
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

        <div className='text-paragraph font-semibold'>
          {parse(String(html))}
        </div>
      </div>
    </div>
  );
};

export default Index;
