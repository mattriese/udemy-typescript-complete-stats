import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','));
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
