import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/users/users.module';
import { ProfileModule } from './components/profile/profile.module';

@Module({
  imports: [UsersModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
