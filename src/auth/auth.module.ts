import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGateway } from './auth.gateway';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthGateway]
})
export class AuthModule {}
