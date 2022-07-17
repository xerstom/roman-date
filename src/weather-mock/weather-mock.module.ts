import { Module } from '@nestjs/common';
import { WeatherMockController } from './weather-mock.controller';

@Module({
  controllers: [WeatherMockController],
})
export class WeatherMockModule {}
