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
      body: SliceZone<PrismicPostRichTextSectionSlice>;
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
