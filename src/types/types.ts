export interface Project {
    map: () => any,
    collectionId: string;
    collectionName: string;
    created: string;
    field: {
      name: string;
      tools: string[];
      description: string;
      images: string[];
      URL: string;
    };
    field1: string;
    id: string;
    updated: string;
    expand: Record<string, unknown>;
  }
