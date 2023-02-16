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
  }[];
  name: string;
  tools: string[];
  updated: string;
  expand: object;
}


export interface Error {
  url: string;
  status: number;
  data: {};
  isAbort: boolean;
  originalError: {};
  name: string;
}
