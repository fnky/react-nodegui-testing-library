export class ErrorWithStack extends Error {
  constructor(message?: string, callsite?: Function) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, callsite);
    }
  }
}

export const createLibraryNotSupportedError = (error: Error): Error =>
  new Error(
    `Currently the only supported library to search by text is "react-nodegui".\n\n${error.message}`,
  );

export const prepareErrorMessage = (error: Error): string =>
  // Strip info about custom predicate
  error.message.replace(/ matching custom predicate[^]*/gm, '');

export const createQueryByError = (
  error: Error,
  callsite: Function,
): null | never => {
  if (error.message.includes('No instances found')) {
    return null;
  }
  throw new ErrorWithStack(error.message, callsite);
};
