import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateValidation } from './dto/DateValidation.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // Test Months
  describe('Test min month', () => {
    it('should return "MMXXII.I.III"', () => {
      expect(appController.getRomanDate(new DateValidation('2022-01-03'))).toBe(
        'MMXXII.I.III',
      );
    });
  });

  describe('Test max month', () => {
    it('should return "MMXXII.XII.III"', () => {
      expect(appController.getRomanDate(new DateValidation('2022-12-03'))).toBe(
        'MMXXII.XII.III',
      );
    });
  });

  // Test days
  describe('Test min day', () => {
    it('should return "MMXXII.I.I"', () => {
      expect(appController.getRomanDate(new DateValidation('2022-01-01'))).toBe(
        'MMXXII.I.I',
      );
    });
  });

  describe('Test max day', () => {
    it('should return "MMXXII.I.XXXI"', () => {
      expect(appController.getRomanDate(new DateValidation('2022-01-31'))).toBe(
        'MMXXII.I.XXXI',
      );
    });
  });
});
