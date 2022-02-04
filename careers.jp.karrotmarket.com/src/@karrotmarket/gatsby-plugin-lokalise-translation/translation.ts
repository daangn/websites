import { graphql, useStaticQuery } from 'gatsby';

export function useTranslation() {
  const data = useStaticQuery(graphql`
    query LokaliseTranslation {
      lokaliseTranslation(locale: {regex: "/jp/i"}) {
        messages {
          ...AllLokaliseMessages
        }
      }
    }
  `);
  return data.lokaliseTranslation!.messages;
}
