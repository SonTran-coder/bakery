import { getHomeSanity } from "@/sanity/queries/home";
import {
  HomepageAbout,
  HomepageCakeCategory,
  HomepageCarousel,
  HomepageFAQ,
} from "@/types/home/sanity";
import { notFound } from "next/navigation";

interface HomepageSanityData {
  carousel?: HomepageCarousel;
  about?: HomepageAbout;
  categories?: HomepageCakeCategory[];
  faq?: HomepageFAQ[];
}

export default async function Home() {
  const data: HomepageSanityData | null = await getHomeSanity();
  if (!data) return null;
  return <div className="mt-[49px]">This is my page</div>;
}
