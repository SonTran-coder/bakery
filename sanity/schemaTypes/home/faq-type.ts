import { HelpCircleIcon } from "@sanity/icons";
import { title } from "process";
import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: "question", type: "blockContent" }),
    defineField({ name: "answer", type: "blockContent" }),
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});
