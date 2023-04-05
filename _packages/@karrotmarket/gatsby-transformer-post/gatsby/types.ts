import {
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
    },
    'post_category'
  >;

export function isPrismicPostCategoryNode(node: Node): node is PrismicPostCategoryNode {
  return node.internal.type === 'PrismicPostCategory';
}

export type PrismicPostNode = PrismicSourceNode &
  PrismicDocument<
    {
      title: TitleField;
      summary: KeyTextField;
      published_at: DateField;
      thumbnail_image: ImageField;
      author: ContentRelationshipField<'team_member'>;
      category: ContentRelationshipField<'post_category'>;
      tags: KeyTextField;
      related_posts: GroupField<{
        post: ContentRelationshipField<'post'>;
      }>;
      body: SliceZone<
        | PrismicPostRichTextSectionSlice
        | PrismicPostDataBodyGroupImageSectionSlice
        | PrismicPostDataBodyQuoteSectionSlice
        | PrismicPostDataBodyVerticalQuoteSectionSlice
        | PrismicPostDataBodyCtaButtonSlice
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
    group_image_caption: string;
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

export function isPrismicPostNode(node: Node): node is PrismicPostNode {
  return node.internal.type === 'PrismicPost';
}

export type PrismicMemberProfileNode = PrismicSourceNode &
  PrismicDocument<
    {
      nickname: KeyTextField;
      name: KeyTextField;
      email: KeyTextField;
      role: KeyTextField;
      image: ImageField;
    },
    'member_profile'
  >;

export function isPrismicMemberProfile(node: Node): node is PrismicMemberProfileNode {
  return node.internal.type === 'PrismicMemberProfile';
}
