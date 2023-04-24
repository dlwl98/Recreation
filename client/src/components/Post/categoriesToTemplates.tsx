import { Categories } from '@custom-types/Categories';

import KeyValueTemplate from '@components/Post/KeyValueTemplate';
import { TemplateProps } from '@components/Post/TemplateProps';

export const categoriesTotemplates: { [Catrgory in Categories]: React.FC<TemplateProps> } = {
  ['choseong']: KeyValueTemplate,
  ['4word']: KeyValueTemplate,
  ['sokdam']: KeyValueTemplate,
};
