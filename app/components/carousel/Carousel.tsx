import { raleway } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { HomepageCarousel } from "@/types/home/sanity";
import Image from "next/image";

function Carousel({ data }: { data?: HomepageCarousel }) {
  if (!data) return null;
  return (
    <div className="mt-8 flex flex-col items-center pb-[86px] gap-32">
      <div>
        <h1
          className={cn(
            raleway.className,
            "text-[64px] font-semibold leading-tight text-center"
          )}
        >
          {data.title}
        </h1>
        <p
          className={cn(
            raleway.className,
            "text-[26px] leading-12 text-center"
          )}
        >
          {data["sub-title"]}
        </p>
      </div>
      <div className="relative w-full max-w-7xl h-[300px]">
        <Image src={data.image.url} alt={data.image.alt} fill />
      </div>
    </div>
  );
}

export { Carousel };
