// ./types.ts
export interface Metadata {
  title: string;
  description: string;
  keywords: string;
  author: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    type: string;
  };
}
