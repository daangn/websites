export type IntegrationFieldsFormat = {
  results_size: number;
  results: IntegrationFieldsItem[];
};

export type IntegrationFieldsItem = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  last_update: number;
  blob: unknown;
};
