import { PostElement } from '@api/getPost';

import { KeyValue } from './KeyValue';

export class Sokdam extends KeyValue {
  constructor(element: PostElement) {
    super(element);
  }

  toString() {
    return this.quiz + ' ' + this.answer;
  }
}
