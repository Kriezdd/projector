
async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  const {title, description} = strapiData.data.attributes;
  return (
    <div className="flex flex-col items-center gap-1 p-24">
      <h1 className="text-3xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
