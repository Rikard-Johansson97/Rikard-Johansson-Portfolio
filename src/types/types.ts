export interface Project {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  id: string;
  images: {
    largeURL: string;
    thumbnailURL: string;
    width: number;
    height: number;
    display: "Mobile" | "Tablet" | "Desktop";
  }[];
  name: string;
  tools: string[];
  updated: string;
  expand: {};
  domain: string;
  github: string;
  poster: string;
  summery: string;
}
