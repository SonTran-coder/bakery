import { TagIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const cakeCategoryType = defineField({
  name: "cakeCategory",
  title: "Cake Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({ name: "desc", type: "blockContent", title: "Description" }),
  ],
});
