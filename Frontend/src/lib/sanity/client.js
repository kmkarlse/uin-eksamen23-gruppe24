import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ftssdrjz",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",
});
