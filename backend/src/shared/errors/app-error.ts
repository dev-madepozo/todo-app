export class AppError extends Error {
  constructor(public statusCode = 500, message: string) {
    super(message);
  }
}
