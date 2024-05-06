/**
 * @function checkLocalStorage
 * @summary Checks local storage for a single key or key array.
 * @author g <gnjmonroe@gmail.com>
 * @param {string|string[]} keys - the key or keys to search for in local storage.
 * @returns {boolean} true if all keys passed exist in local storage
 */
export const checkLocalStorage = (keys: string | string[]) => {
  if (typeof keys === "string") return Boolean(localStorage.getItem(keys));
  for (const key of keys) {
    if (!localStorage.getItem(key)) return false;
  }
  return true;
};
