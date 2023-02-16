import ProjectCarousel from "@/components/ProjectCarousel";
import useGetProject from "@/lib/Project";
import { Chip } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const Index: NextPage = () => {
  const router = useRouter();
  const { projectid } = router.query;

  const [data, loading, error] = useGetProject(projectid as string);

  if (loading) return <h1>Loading...</h1>;

  const html: string = data?.description;

  console.log(data);
  console.log(projectid);

  return (
    <div className='flex-1 mx-auto mt-16 p-4'>
      <ProjectCarousel
        galleryID='my-test-gallery'
        images={[
          {
            largeURL: "https://i.imgur.com/LHsNofw.jpg",
            thumbnailURL: "https://i.imgur.com/LHsNofw.jpg",
            width: 375,
            height: 2000,
          },
          {
            largeURL: "https://i.imgur.com/gfp7BbA.jpg",
            thumbnailURL: "https://i.imgur.com/gfp7BbA.jpg",
            width: 1000,
            height: 1000,
          },
          {
            largeURL: "https://i.imgur.com/LHsNofw.jpg",
            thumbnailURL: "https://i.imgur.com/LHsNofw.jpg",
            width: 375,
            height: 1000,
          },
          {
            largeURL: "https://i.imgur.com/gfp7BbA.jpg",
            thumbnailURL: "https://i.imgur.com/gfp7BbA.jpg",
            width: 1000,
            height: 1000,
          },
          {
            largeURL: "https://i.imgur.com/LHsNofw.jpg",
            thumbnailURL: "https://i.imgur.com/LHsNofw.jpg",
            width: 375,
            height: 1000,
          },
        ]}
      />
      <div className='mt-4 flex flex-col max-w-5xl mx-auto'>
        <h2 className='text-2xl text-headline font-bold'>{data.name}</h2>
        <div className='flex py-4 gap-2'>
          {data?.tools?.map((tool: string, i: number) => (
            <Chip
              key={i}
              label={tool}
              variant='outlined'
              className='text-paragraph font-semibold border-greenText'
            />
          ))}
        </div>
        <p className='text-paragraph font-semibold'>{parse(String(html))}</p>
      </div>
    </div>
  );
};

export default Index;
