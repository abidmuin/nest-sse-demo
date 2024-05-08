import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Demo Nest Application for SSE Demo';
  }
}
