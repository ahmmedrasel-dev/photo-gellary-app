import Image from "next/image";
import { getDisctionaries } from "./disctionaries";
export default async function Home({ params: { lang } }) {
  const disctionaries = await getDisctionaries(lang);
  return <div>{disctionaries.followers}</div>;
}
