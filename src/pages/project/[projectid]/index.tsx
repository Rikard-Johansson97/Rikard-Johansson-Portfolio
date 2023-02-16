import ProjectCarousel from "@/components/ProjectCarousel";
import useGetProject from "@/lib/Project";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const { projectid } = router.query;

  const [data, loading, error] = useGetProject(projectid as string);

  console.log(data);
  const project = data?.field;

  return (
    <div className='flex-1 mx-auto mt-16 p-4'>
      <ProjectCarousel
        galleryID='my-test-gallery'
        images={[
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
            width: 2500,
            height: 1666,
          },
          {
            largeURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
            thumbnailURL:
              "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
            width: 2500,
            height: 1666,
          },
        ]}
      />
      <div className='mt-4'>
        <h2 className='text-2xl text-headline font-bold'>{project.name}</h2>
        <p className='text-paragraph font-semibold'>{project.description}</p>
      </div>
    </div>
  );
};

export default Index;
