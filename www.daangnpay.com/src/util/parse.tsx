export const parseTextNewline = (text?: string): string | JSX.Element[] => {
  if (!text) return "";

  const chunks = text.split("\\n");

  return chunks.length < 2
    ? text
    : chunks.map((chunk) => (
        <>
          {chunk}
          <br />
        </>
      ));
};
