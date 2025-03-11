import { HelpCircleIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: "question", type: "text" }),
    defineField({ name: "answer", type: "text" }),
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});
