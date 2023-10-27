export interface ExperienceResult {
  lastUpdatedBy: string;
  folders: any[];
  data: ExperienceData;
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

export interface ExperienceData {
  endDate?: string;
  position: string;
  title: string;
  url?: Url;
  description?: string;
  startDate: string;
}

export interface Url {
  "@type": string;
  Default: string;
}

export interface Meta {
  kind: string;
  lastPreviewUrl: string;
  originalContentId: string;
  winningTest: any;
}

export interface Variations {}
