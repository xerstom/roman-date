import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DateValidation } from './dto/DateValidation.dto';
// import { WeatherParams } from './dto/WeatherParams.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('roman')
  // async getRomanDate(@Query() query: DateValidation): Promise<string> {
  //   console.log(query.date);
  //   const date = this.appService.getRomanDate(query.date);
  //   return this.appService.getWeatherFromDate(new WeatherParams(query.date));
  // }
  @Get('roman')
  getRomanDate(@Query() query: DateValidation): string {
    console.log(query.date);
    return this.appService.getRomanDate(query.date);
  }
}
