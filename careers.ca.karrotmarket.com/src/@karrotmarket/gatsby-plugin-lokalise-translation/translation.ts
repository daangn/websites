import { graphql, useStaticQuery } from 'gatsby';

export function useTranslation() {
  const data = useStaticQuery<GatsbyTypes.LokaliseTranslationQuery>(graphql`
    query LokaliseTranslation {
      lokaliseTranslation(locale: {regex: "/ca/i"}) {
        messages {
          ...AllLokaliseMessages
        }
      }
    }
  `);
  return data.lokaliseTranslation!.messages;
}
