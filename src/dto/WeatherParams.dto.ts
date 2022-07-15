import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';
import { weather } from '../secret.template.json';

export class WeatherParams {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  dt: Date;

  lat: number;

  long: number;

  appid: string;

  constructor(_dt: Date) {
    this.dt = _dt;
    this.lat = weather?.lat;
    this.long = weather?.long;
    this.appid = weather?.key;
    // this.lat = 48.866667;
    // this.long = 2.333333;
    // this.appid = '5b6ad7751c7b1794da694398ca16ca76';
  }
}
