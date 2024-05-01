import { options } from "../data";

export type SelectionOptions = (typeof options)[number]["options"][number];

export const isSelectionOption = (
  query: string | null,
): query is SelectionOptions => {
  if (query === null) return true;
  const categoryOptions = options.flatMap((category) => category.options);
  for (const option of categoryOptions) {
    if (query === option) return true;
  }
  return false;
};
