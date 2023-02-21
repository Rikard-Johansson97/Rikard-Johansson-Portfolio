export type Project = [
  ProjectData,
  boolean,
  any
]

export interface ProjectData {
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
    display: string;
  }[];
  name: string;
  tools: string[];
  updated: string;
  expand: {};
  domain:string,
  github: string;
  poster: string;
};

export interface Error {
  url: string;
  status: number;
  data: {};
  isAbort: boolean;
  originalError: {};
  name: string;
}
