export async function fromBlob(blob: Blob): Promise<string> {
  const dataUrl = await new Promise<string>(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
  const dataIndex = dataUrl.indexOf(',') + 1;
  return dataUrl.substr(dataIndex);
}
