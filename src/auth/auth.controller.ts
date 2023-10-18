import { Body, Controller, Post } from '@nestjs/common';
import { AdminDto_Login } from 'src/dto/admin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('login')
    async login(@Body() dto: AdminDto_Login) {
        return 
    }
}
