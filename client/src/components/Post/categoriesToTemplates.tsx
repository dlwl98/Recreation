import { Categories } from '@custom-types/Categories';

import KeyValueTemplate from './KeyValueTemplate';
import { TemplateProps } from './TemplateProps';

export const categoriesTotemplates: { [Catrgory in Categories]: React.FC<TemplateProps> } = {
  ['choseong']: KeyValueTemplate,
  ['4word']: KeyValueTemplate,
  ['sokdam']: KeyValueTemplate,
};
