import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}

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

/**before big refactor:
 *
 *
 * import fs from 'fs';
import { parseDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): any => {
        return [
          parseDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
 */
