import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { DateValidation } from './dto/DateValidation.dto';
// import { WeatherParams } from './dto/WeatherParams.dto';

@ApiTags('Roman Converter')
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
  @ApiOperation({
    summary:
      'Sends back date converted to roman date and the temperature of Paris at this date',
  })
  @ApiExtraModels(DateValidation)
  @ApiResponse({
    status: 200,
    description: '<The date converted in roman>',
  })
  @ApiResponse({
    status: 400,
    description: 'date must be a Date instance',
  })
  getRomanDate(@Query() query: DateValidation): string {
    console.log(query.date);
    return this.appService.getRomanDate(query.date);
  }
}
