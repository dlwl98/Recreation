import { PostElement } from '@api/getPost';

import { KeyValue } from './KeyValue';

export class FourWord extends KeyValue {
  constructor(element: PostElement) {
    super(element);
  }

  toString() {
    return this.quiz + this.answer;
  }
}
