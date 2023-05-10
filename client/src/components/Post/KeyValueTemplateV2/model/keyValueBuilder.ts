import { Categories } from '@custom-types/Categories';

import { PostElement } from '@api/getPost';

import { Choseong } from './Choseong';
import { FourWord } from './FourWord';
import { Sokdam } from './Sokdam';

export function keyValueBuilder(category: Categories, elements: PostElement[]) {
  switch (category) {
    case 'choseong':
      return elements.map((element) => new Choseong(element));
    case '4word':
      return elements.map((element) => new FourWord(element));
    case 'sokdam':
      return elements.map((element) => new Sokdam(element));
    default:
      throw new Error();
  }
}
