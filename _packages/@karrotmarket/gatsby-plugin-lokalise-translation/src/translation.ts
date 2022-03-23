import { useStaticQuery, graphql } from 'gatsby';

export function useTranslation(): Record<string, string> {
  const data = useStaticQuery<GatsbyTypes.LokaliseTranslationQuery>(graphql`
    query LokaliseTranslation {
      lokaliseTranslation {
        messages {
          ...AllLokaliseMessages
        }
      }
    }
  `);
  return data.lokaliseTranslation.messages;
}
