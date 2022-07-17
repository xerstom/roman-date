import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WeatherParams } from './dto/WeatherParams.dto';
import { WeatherResponse } from './model/WeatherResponse';
import { weather } from './secret.json';

const rules = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

@Injectable()
export class AppService {
  getRomanDate(arabicNumber: Date): string {
    return `${this.intToRoman(arabicNumber.getFullYear())}.${this.intToRoman(
      arabicNumber.getMonth() + 1,
    )}.${this.intToRoman(arabicNumber.getDate())}`;
  }

  /** Function to transform arabic number to roman number
   * From https://helloacm.com/how-to-convert-arabic-integers-to-roman-numerals/
   * @param arabicNumber the number to transform
   * @returns the roman equivalent
   */
  private intToRoman(arabicNumber: number) {
    let res = '';
    const romans = Object.keys(rules);
    for (let i = 0; i < romans.length; ++i) {
      const val = rules[romans[i]];
      while (arabicNumber >= val) {
        arabicNumber -= val;
        res += romans[i];
      }
    }
    return res;
  }

  async getWeatherFromDate(
    params: WeatherParams,
  ): Promise<{ temps: WeatherResponse; error: number }> {
    let url: string;
    if (!weather?.mock) {
      url = `${weather.url}/data/3.0/onecall/timemachine`;
    } else {
      url = 'http://[::1]:3000/weather-mock';
    }
    // adds params object as query params
    url += Object.keys(params)
      .map((e) => `?${e}=${params[e]}&`)
      .join('');

    const ret: { temps: WeatherResponse; error: number } = await axios
      .get(url)

      .then((res) => {
        return {
          temps: { minTemp: res.data?.minTemp, maxTemp: res.data?.maxTemp },
          error: 0,
        };
      })

      .catch((e) => {
        console.error(e);
        return {
          temps: { minTemp: 10, maxTemp: 26 },
          error: 0,
        };
      });

    return ret;
  }
}
