import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("cakeCategory").title("Cake Categories"),
      S.documentTypeListItem("faq").title("FAQ"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "home", "cakeCategory", "faq"].includes(item.getId()!)
      ),
    ]);
