export function localStorageToUpper(key: string) {
  return localStorage.getItem(key)?.toUpperCase();
}
