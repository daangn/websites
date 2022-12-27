import { type Node } from 'gatsby';
import {
  type PrismicDocument,
  type ContentRelationshipField,
  type TitleField,
  type RichTextField,
  type KeyTextField,
  type ImageField,
  type GroupField,
  type SliceZone,
  type Slice,
} from '@prismicio/types';

type PrismicSourceNode = Node & {
  prismicId: string,
};

export type PrismicAboutBlogCategoryNode = PrismicSourceNode & PrismicDocument<{
  uid: string,
  name: KeyTextField,
}, 'about_blog_category'>;

export function isPrismicAboutBlogCategoryNode(node: Node): node is PrismicAboutBlogCategoryNode {
  return node.internal.type === 'PrismicAboutBlogCategory';
}

export type PrismicAboutBlogPostNode = PrismicSourceNode & PrismicDocument<{
  title: TitleField,
  summary: KeyTextField,
  thumbnail_image: ImageField,
  author: ContentRelationshipField<'team_member'>,
  category: ContentRelationshipField<'about_blog_category'>,
  tags: KeyTextField,
  related_posts: GroupField<{
    post: ContentRelationshipField<'about_blog_post'>,
  }>,
  body: SliceZone<(
    | PrismicAboutBlogPostRichTextSectionSlice
    | PrismicAboutBlogPostImageSectionSlice
  )>,
}, 'about_blog_post'>;

export type PrismicAboutBlogPostRichTextSectionSlice = Slice<'rich_text_section', {
  content: RichTextField,
}>;

export type PrismicAboutBlogPostImageSectionSlice = Slice<'image_section', {
  section_title: TitleField,
  section_body: RichTextField,
}, {
  image: ImageField,
  image_description: RichTextField,
}>;

export function isPrismicAboutBlogPostNode(node: Node): node is PrismicAboutBlogPostNode {
  return node.internal.type === 'PrismicAboutBlogPost';
}

export type PrismicMemberProfileNode = PrismicSourceNode & PrismicDocument<{
  nickname: KeyTextField,
  name: KeyTextField,
  email: KeyTextField,
  role: KeyTextField,
  image: ImageField,
}, 'member_profile'>;

export function isPrismicMemberProfile(node: Node): node is PrismicMemberProfileNode {
  return node.internal.type === 'PrismicMemberProfile';
}
