/**
 *
 * Method of the Storage interface, will return key's value, or null if the key does not exist.
 *
 */
export const getLocalStorage = (item: string) => {
  const data: string | null = window.localStorage.getItem(item);
  if (data) return JSON.parse(data);
};

/**
 *
 * Method of the Storage interface, will set key & value.
 *
 */
export const setLocalStorage = (item: string, value: string) => {
  window.localStorage.setItem(item, value);
};
