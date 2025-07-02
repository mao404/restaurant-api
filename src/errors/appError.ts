export class AppError extends Error {
  public code: number;
  public data?: any;

  constructor(message: string, code: number = 500, data?: any) {
    super(message);
    this.code = code;
    this.data = data;
  }
} 