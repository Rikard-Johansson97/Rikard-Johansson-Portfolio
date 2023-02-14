import ProjectCarousel from "@/components/ProjectCarousel";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const { projectid } = router.query;

  return (
    <div className='flex-1 mx-auto mt-20'>
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
    </div>
  );
};

export default Index;
