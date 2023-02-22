import { Controller, Get } from '@nestjs/common';
import { AppService } from '@application/use-cases/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('controller');
    return this.appService.getHello();
  }
}
