import { Transform } from 'class-transformer';
import { IsDate } from 'class-validator';

export class DateValidation {
  @Transform(({ value }) => new Date(value))
  @IsDate()
  date: Date;

  /** Creates a DataValidation from string
   * @param date the date in string format
   */
  constructor(date: string) {
    this.date = new Date(date);
  }
}
