import { type Node } from 'gatsby';
import {
  type PrismicDocument,
  type ContentRelationshipField,
  type TitleField,
  type KeyTextField,
} from '@prismicio/types';

type PrismicSourceNode = Node & {
  prismicId: string,
};

export type PrismicAboutBlogPostNode = PrismicSourceNode & PrismicDocument<{
  title: TitleField,
  author: ContentRelationshipField<'team_member'>,
}, 'about_blog_post'>;

export function isPrismicAboutBlogPostNode(node: Node): node is PrismicAboutBlogPostNode {
  return node.internal.type === 'PrismicAboutBlogPost';
}

export type PrismicMemberProfileNode = PrismicSourceNode & PrismicDocument<{
  name: KeyTextField,
}, 'member_profile'>;

export function isPrismicMemberProfile(node: Node): node is PrismicMemberProfileNode {
  return node.internal.type === 'PrismicMemberProfile';
}