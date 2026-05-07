import { wikiCatalog } from "./wikiCatalog";
import { loadPages } from '../utils'

const markdownModules = import.meta.glob("../content/wiki/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

export const wikiPages = loadPages(wikiCatalog, markdownModules);