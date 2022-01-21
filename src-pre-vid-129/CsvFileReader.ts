import fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
// 19/01/2019

/** my attempt (very similar:
 * )
 * export class CsvFileReader {
  constructor(public fileName: string) {}

  data: string[][] = this.read(this.fileName);

  read(csvFile: string): string[][] {
    return fs
      .readFileSync(csvFile, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
 */
