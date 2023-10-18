import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AdminDto_Registration } from './dto/admin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  register(@Body() dto: AdminDto_Registration) {
    return this.appService.adminRegistration(dto);
  }
}
