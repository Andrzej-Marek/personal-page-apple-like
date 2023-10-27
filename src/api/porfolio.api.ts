export interface PortfolioResult {
  lastUpdatedBy: string;
  folders: any[];
  data: PortfolioData;
  modelId: string;
  query: any[];
  published: string;
  firstPublished: number;
  testRatio: number;
  lastUpdated: number;
  createdDate: number;
  createdBy: string;
  meta: Meta;
  variations: Variations;
  name: string;
  id: string;
  rev: string;
}

export interface PortfolioData {
  technologies: Technology[];
  images: Image[];
  callToActionTitle: string;
  about: string;
  description: string;
  startDate: string;
  endDate?: string;
  callToActionSubTitle: string;
}

export interface Technology {
  icon: string;
  name: string;
}

export interface Image {
  image: string;
  alt: string;
}

export interface Meta {
  kind: string;
  lastPreviewUrl: string;
}

export interface Variations {}
