import { Roboto, Raleway } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "800", "700"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "700"],
});
