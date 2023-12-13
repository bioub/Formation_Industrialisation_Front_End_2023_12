export function promiseRandomTimeout(value: any) {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(value);
      },
      Math.floor(Math.random() * 1000),
    );
  });
}
