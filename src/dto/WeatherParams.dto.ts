import { ApiProperty } from '@nestjs/swagger';
import { weather } from '../secret.json';

export class WeatherParams {
  @ApiProperty()
  dt: string;

  @ApiProperty()
  lat: number;

  @ApiProperty()
  long: number;

  @ApiProperty()
  appid: string;

  constructor(_dt: Date) {
    this.dt = _dt ? _dt.toISOString() : '0000-01-01';
    this.lat = weather?.lat;
    this.long = weather?.long;
    this.appid = weather?.key;
    // this.lat = 48.866667;
    // this.long = 2.333333;
    // this.appid = '5b6ad7751c7b1794da694398ca16ca76';
  }
}
