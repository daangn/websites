import type { AllLokaliseMessages } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/types';

export function useTranslation(): AllLokaliseMessages {
  throw new Error('useTranslation must be shadowed by site');

  // Shadowed module maybe like:
  /**
   * @example
   * ```js
   * export function useTranslation() {
   *   const data = useStaticQuery(graphql`
   *     query LokaliseTranslation {
   *       lokaliseTranslation(locale: {regex: "/ko/i"}) {
   *         messages {
   *           ...AllLokaliseMessages
   *         }
   *       }
   *     }
   *   `);
   *   return data.lokaliseTranslation.messages;
   * }
   * ```
   */
}
