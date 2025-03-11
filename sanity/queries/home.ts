import { client } from "../lib/client";
import { groq } from "next-sanity";

export async function getHomeSanity() {
  const data = await client.fetch(groq`*[_type == "home"][0]{
    carousel {
        title,
        "sub-title": sub_title,
        image {
           "url": asset->url,
           alt
        }
    },
    about {
        pros[] {
            pros_quantity,
            pros_title
        },
        desc
    },
    categories[]-> {
        name,
        image {
           "url": asset->url,
           alt
        },
        desc
    },
    faq[]-> {
        question,
        answer
    }
  }`);
  return data;
}
