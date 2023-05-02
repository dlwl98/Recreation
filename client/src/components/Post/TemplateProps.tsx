import { Categories } from '@custom-types/Categories';

import { PostElement } from '@api/getPost';

export type TemplateProps = {
  category: Categories;
  elements: PostElement[];
};
