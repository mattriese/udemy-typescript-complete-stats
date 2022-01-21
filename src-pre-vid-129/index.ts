import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();

// console.log('date of first match: ', reader.data[0][0]);

let manUnitedWins = 0;
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}
console.log('ManUwins: ', manUnitedWins);
