import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { DateValidation } from './dto/DateValidation.dto';
import { WeatherParams } from './dto/WeatherParams.dto';
import { WeatherResponse } from './model/WeatherResponse';

@ApiTags('Roman Converter')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  @Get('roman')
  async getRomanDate(
    @Query() query: DateValidation,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ date: string; temps: WeatherResponse }> {
    const date: string = this.appService.getRomanDate(query.date);
    const { temps, error } = await this.appService.getWeatherFromDate(
      new WeatherParams(query.date),
    );
    if (error != 0) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY);
    }
    return { date, temps };
  }
}
