import { Injectable } from '@nestjs/common';
import { json } from 'body-parser';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHai():any{
    return {
      result: true,
      message: "success"
    }
  }
}
