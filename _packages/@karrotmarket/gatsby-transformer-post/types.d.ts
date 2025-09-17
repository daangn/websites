import {
  type NumberField,
  type ContentRelationshipField,
  type DateField,
  type GroupField,
  type ImageField,
  type KeyTextField,
  type PrismicDocument,
  type RichTextField,
  type Slice,
  type SliceZone,
  type TitleField,
} from '@prismicio/types';
import { type Node } from 'gatsby';

type PrismicSourceNode = Node & {
  prismicId: string;
};

export type PrismicPostCategoryNode = PrismicSourceNode &
  PrismicDocument<
    {
      uid: string;
      name: KeyTextField;
      priority: NumberField;
    },
    'post_category'
  >;

export type PrismicPostNode = PrismicSourceNode &
  PrismicDocument<
    {
      title: TitleField;
      summary: KeyTextField;
      published_at: DateField;
      thumbnail_image: ImageField;
      vertical_thumbnail_image: ImageField;
      author: ContentRelationshipField<'team_member'>;
      category: ContentRelationshipField<'post_category'>;
      tags: KeyTextField;
      header_quote: RichTextField;
      related_posts: GroupField<{
        post: ContentRelationshipField<'post'>;
      }>;
      body: SliceZone<
        | PrismicPostRichTextSectionSlice
        | PrismicPostDataBodyGroupImageSectionSlice
        | PrismicPostDataBodyQuoteSectionSlice
        | PrismicPostDataBodyVerticalQuoteSectionSlice
        | PrismicPostDataBodyCtaButtonSlice
        | PrismicPostDataBodySingleImageSectionSlice
        | PrismicPostDataBodyDividerSlice
        | PrismicPostDataBodySummaryBulletSectionSlice
      >;
    },
    'post'
  >;

export type PrismicPostRichTextSectionSlice = Slice<
  'rich_text_section',
  {
    content: RichTextField;
    id: string;
    slice_type: string;
    primary: RichTextField;
    items: RichTextField;
  }
>;

export type PrismicPostDataBodyGroupImageSectionSlice = Slice<
  'group_image_section',
  {
    id: string;
    slice_type: string;
    group_image_caption: string | null;
    group_image1: ImageField;
    group_image2: ImageField;
  }
>;

export type PrismicPostDataBodyQuoteSectionSlice = Slice<
  'quote_section',
  {
    id: string;
    slice_type: string;
    primary: RichTextField;
  }
>;

export type PrismicPostDataBodyVerticalQuoteSectionSlice = Slice<
  'vertical_quote_section',
  {
    id: string;
    slice_type: string;
    primary: RichTextField;
  }
>;

export type PrismicPostDataBodyCtaButtonSlice = Slice<
  'cta_button',
  {
    id: string;
    slice_type: string;
    primary: {
      cta_button_text: string;
      cta_phrase: string;
      cta_button_url: {
        url: string;
      };
    };
  }
>;

export type PrismicPostDataBodySingleImageSectionSlice = Slice<
  'single_image_section',
  {
    id: string;
    slice_type: string;
    image: ImageField;
    image_caption_text: string | null;
  }
>;

export type PrismicPostDataBodyDividerSlice = Slice<
  'divider',
  {
    full_width_line_divider: boolean;
    line_divider: boolean;
    dot_divider: boolean;
  }
>;

export type PrismicPostDataBodySummaryBulletSectionSlice = Slice<
  'summary_bullet_section',
  {
    id: string;
    slice_type: string;
    primary: RichTextField;
  }
>;

export type PrismicMemberProfileNode = PrismicSourceNode &
  PrismicDocument<
    {
      nickname: KeyTextField;
      name: KeyTextField;
      email: KeyTextField;
      role: KeyTextField;
      image: ImageField;
      link: string;
      profile_link: {
        url: string;
      };
    },
    'member_profile'
  >;
