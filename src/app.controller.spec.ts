import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  // Test get roman date
  describe('Test min month', () => {
    it('should return "MMXXII.I.III"', async () => {
      expect(await appService.getRomanDate(new Date('2022-01-03'))).toBe(
        'MMXXII.I.III',
      );
    });
  });

  describe('Test min month', () => {
    it('should return "MMXXII.XII.III"', async () => {
      expect(await appService.getRomanDate(new Date('2022-12-03'))).toBe(
        'MMXXII.XII.III',
      );
    });
  });

  describe('Test min day', () => {
    it('should return "MMXXII.I.I"', async () => {
      expect(await appService.getRomanDate(new Date('2022-01-01'))).toBe(
        'MMXXII.I.I',
      );
    });
  });
  describe('Test max day', () => {
    it('should return "MMXXII.I.XXXI"', async () => {
      expect(await appService.getRomanDate(new Date('2022-01-31'))).toBe(
        'MMXXII.I.XXXI',
      );
    });
  });
});
