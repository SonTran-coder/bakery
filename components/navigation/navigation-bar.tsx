"use client";

import { Cart } from "@/assets/svgs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList: Record<string, string>[] = [
  { label: "Home", link: "/" },
  { label: "Menu", link: "/menu" },
  { label: "About", link: "/about" },
];

const exceptPage = ["/studio"];

const hoverNavEffect = cn(
  "after:absolute after:bottom-0 after:left-full after:w-full after:h-[1px] after:bg-primary-100 after:transition-all after:opacity-0",
  "hover:after:-translate-x-full hover:after:opacity-100"
);

function NavigationBar() {
  const pathname = usePathname();

  if (exceptPage.some((page) => pathname.startsWith(page))) {
    return <></>;
  }

  return (
    <div className="px-[72px] flex justify-between fixed top-0 w-full z-50 border-b-[0.5px] border-b-primary-500 bg-background-200">
      <p className="p-2 font-medium">Annie Gâteaux</p>
      <div className="grid grid-cols-4 gap-4">
        {navList.map((nav) => (
          <Link
            className={cn(
              "p-2 font-medium leading-loose relative",
              hoverNavEffect
            )}
            key={nav.label}
            href={nav.link}
          >
            {nav.label}
          </Link>
        ))}
        <div
          className={cn(
            "flex justify-center items-center cursor-pointer relative",
            hoverNavEffect
          )}
        >
          <Cart />
        </div>
      </div>
    </div>
  );
}

export { NavigationBar, exceptPage };
