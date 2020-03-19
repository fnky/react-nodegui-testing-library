export default function waitForElement<T>(
  expectation: () => T,
  timeout = 4500,
  interval = 50,
): Promise<T> {
  const startTime = Date.now();
  return new Promise((resolve, reject) => {
    const rejectOrRerun = (error: Error): void => {
      if (Date.now() - startTime >= timeout) {
        reject(error);
        return;
      }
      setTimeout(runExpectation, interval);
    };
    function runExpectation(): void {
      try {
        const result = expectation();
        resolve(result);
      } catch (error) {
        rejectOrRerun(error);
      }
    }
    setTimeout(runExpectation, 0);
  });
}
