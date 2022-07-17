import { Controller, Get, Query } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WeatherParams } from 'src/dto/WeatherParams.dto';
@ApiTags('Weather Mock')
@Controller('weather-mock')
export class WeatherMockController {
  @Get('/')
  @ApiOperation({
    summary: 'Mock the call to open weather api',
  })
  @ApiExtraModels(WeatherParams)
  getParisWeather(@Query() query: WeatherParams) {
    return { minTemp: 10, maxTemp: 26, uselessField: 1523 };
  }
}
