import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "carousel",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "sub_title", type: "string", title: "Sub Title" }),
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
      ],
    }),
    defineField({
      name: "about",
      type: "object",
      fields: [
        defineField({
          name: "pros",
          title: "Pros",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "pros_quantity", type: "number" }),
                defineField({ name: "pros_title", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "desc",
          title: "Description",
          type: "blockContent",
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Cake Categories",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "cakeCategory" } }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "faq" } })],
    }),
  ],
  preview: {
    select: {
      title: "carousel.title",
    },
  },
});
