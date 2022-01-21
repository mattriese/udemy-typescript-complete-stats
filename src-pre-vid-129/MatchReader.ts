import { parseDate } from './utils';
import { MatchResult } from './MatchResult';
/**
 * strategy: you start with a csv file and you know it's of matches, so you need a
 * general class to read the csv file, and a more specific class to parse the data
 * from the reader (2D array of strings) into useful format (types) for matches
 *
 * With this strategy, the csvReader and MatchReader are loosely coupled, and
 * an instance of the CsvFileReader is passed to the MatchReader for it to use.
 */
type MatchData = [Date, string, string, number, number, MatchResult, string];

export interface DataReader {
  read(): void;
  data: string[][];
}

/**
 * Interesting strategy here, of passing instance of one class to
 * another class (instance), and then just accessing the properties on the
 * inner class instance as if it's a property of the outer class instance
 * (because it IS!!! - "class instances" are just objects!!! of course they
 * can be nested and you can access properties on the inner one from the outer
 * one!! My instinct would be to have methods on the inner class RETURN a value
 * and then set the property of the outer class with that return value.
 */

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    // produce the 2D array of strings from the file
    this.reader.read();
    // parse the strings in that 2D array to be of the correct types for matches
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        parseDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult /** <-- type assertion */,
        row[6],
      ];
    });
  }
}
