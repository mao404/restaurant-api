export class Success {
  public status: string;
  public data: any;

  constructor(data: any) {
    this.status = "OK";
    this.data = data;
  }
} 