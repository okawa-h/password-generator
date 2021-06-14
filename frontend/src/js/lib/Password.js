import { map, has } from 'lodash';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!#$%&()';

export default class Password {
  constructor() {
    this.wordLength = 8;
    this.includeLower = false;
    this.includeUpper = false;
    this.includeNumber = false;
    this.includeSymbols = false;
  }

  setConfig(config={}) {
    if (has(config, 'wordLength')) this.wordLength = Number(config.wordLength);
    if (has(config, 'includeLower')) this.includeLower = config.includeLower;
    if (has(config, 'includeUpper')) this.includeUpper = config.includeUpper;
    if (has(config, 'includeNumber')) this.includeNumber = config.includeNumber;
    if (has(config, 'includeSymbols')) this.includeSymbols = config.includeSymbols;
  }

  generate() {
    const words = this._getWords();
    return map([...Array(this.wordLength)], () => {
      return words.charAt(Math.floor(Math.random() * words.length));
    }).join('');
  }

  generates(length) {
    return map([...Array(length)], () => this.generate());
  }

  _getWords() {
    const words = [];
    if (this.includeLower) words.push(ALPHABET);
    if (this.includeUpper) words.push(ALPHABET.toUpperCase());
    if (this.includeNumber) words.push(NUMBERS);
    if (this.includeSymbols) words.push(SYMBOLS);
    return words.join('');
  }
}
