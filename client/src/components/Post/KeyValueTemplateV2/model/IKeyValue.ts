export interface IKeyValue {
  quiz: string;
  answer: string;
  guess: (input: string) => boolean;
  toString: () => string;
}
