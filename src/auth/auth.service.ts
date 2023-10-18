import { Injectable } from '@nestjs/common';
import { AppService } from "../app.service";

@Injectable()
export class AuthService {
  constructor(private readonly appService: AppService) {
  }
  async validateUser(username: string, password: string) {

  }
}
