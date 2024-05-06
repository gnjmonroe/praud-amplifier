export const checkLocalStorage = (keys: string | string[]) => {
  if (typeof keys === "string") return Boolean(localStorage.getItem(keys));
  for (const key of keys) {
    if (!localStorage.getItem(key)) return false;
  }
  return true;
};
