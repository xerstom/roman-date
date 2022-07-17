import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherMockModule } from './weather-mock/weather-mock.module';

@Module({
  imports: [WeatherMockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
