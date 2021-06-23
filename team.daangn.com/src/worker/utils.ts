export function extractExtension(filename: string): string {
  const match = filename.match(/\.(\w+)$/);
  return match ? match[0] : '';
}

export function formatDate(date: Date): string {
  // KST 날짜 보정
  const kstOffsetHours = 9;
  const kstOffsetDays = (date.getUTCHours() + kstOffsetHours) / 24 > 1 ? 1 : 0;

  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = (date.getDate() + kstOffsetDays).toString().padStart(2, '0');
  const HH = (date.getHours() + kstOffsetHours).toString().padStart(2, '0');
  const mm = (date.getMinutes()).toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}-${HH}-${mm}`;
}
