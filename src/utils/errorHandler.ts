export const errorHandler = (error: unknown) => {
  if (error instanceof Error) console.log(error.message);
};
