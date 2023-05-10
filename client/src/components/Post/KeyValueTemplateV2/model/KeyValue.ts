import { PostElement } from '@api/getPost';

import { IKeyValue } from './IKeyValue';

export class KeyValue implements IKeyValue {
  quiz: string;
  answer: string;
  constructor(element: PostElement) {
    this.quiz = element.quiz;
    this.answer = element.answer;
  }
  guess(input: string) {
    if (this.answer === input) {
      return true;
    }
    return false;
  }

  toString() {
    return this.answer;
  }
}
