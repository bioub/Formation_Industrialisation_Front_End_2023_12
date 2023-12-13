export function timeoutUpper(val: string, cb: (val: string) => void) {
  setTimeout(() => {
    cb(val.toUpperCase());
  }, 1000);
}
