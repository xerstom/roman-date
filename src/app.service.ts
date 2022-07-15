import { Injectable } from '@nestjs/common';
// import axios from 'axios';
// import { WeatherParams } from './dto/WeatherParams.dto';
// import {weather} from './secret.template.json';

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

  // async getWeatherFromDate(params: WeatherParams): Promise<string> {
  //   let a;
  //   axios
  //     .get(
  //       `${weather.url}/data/3.0/onecall/timemachine${Object.keys(params).map(
  //         (e) => `?${e}=${params[e]}`,
  //       )}`,
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       a = res;
  //     });
  //   return a;
  // }
}
