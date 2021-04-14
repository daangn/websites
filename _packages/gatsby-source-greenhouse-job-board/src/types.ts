export type GreenhouseJob = {
  id: number,
  updated_at: string,
  absolute_url: string,
  content: string,
  metadata: GreenhouseJobCustomFieldMetadata[],
};

export type GreenhouseJobCustomFieldMetadata = {
  id: number,
  name: string,
  value_type: GreenhouseJobCustomFieldValueType,
  value: string | null,
};

export type GreenhouseJobCustomFieldValueType = (
  | 'short_text'
  | 'long_text'
  | 'single_select'
  | 'multi_select'
  | 'yes_no'
  | 'currency'
  | 'date'
  | 'url'
  | 'user'
  | 'currency_range'
  | 'number_range'
);
