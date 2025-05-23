import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { PrismaService } from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
