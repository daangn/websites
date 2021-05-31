export type GreenhouseJob = {
  id: number,
  updated_at: string,
  absolute_url: string,
  content: string,
  metadata: GreenhouseJobCustomFieldMetadata[],
};

export type GreenhouseJobCustomFieldMetadata = (
  | {
    id: number,
    name: string,
    value_type: GreenhouseJobCustomFieldValueTypeString,
    value: string | boolean | null,
  }
  | {
    id: number,
    name: string,
    value_type: GreenhouseJobCustomFieldValueTypeBoolean,
    value: boolean | null,
  }
);

type GreenhouseJobCustomFieldValueTypeString = (
  | 'short_text'
  | 'long_text'
  | 'single_select'
  | 'multi_select'
  | 'currency'
  | 'date'
  | 'url'
  | 'user'
  | 'currency_range'
  | 'number_range'
);
type GreenhouseJobCustomFieldValueTypeBoolean = (
  | 'yes_no'
);
export type GreenhouseJobCustomFieldValueType = (
  | GreenhouseJobCustomFieldValueTypeString
  | GreenhouseJobCustomFieldValueTypeBoolean
);
