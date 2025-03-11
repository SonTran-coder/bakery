import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { homeType } from "./home/home-type";
import { cakeCategoryType } from "./home/cake-category-type";
import { faqType } from "./home/faq-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homeType,
    cakeCategoryType,
    faqType
  ],
};
