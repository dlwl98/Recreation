import { Categories } from '@custom-types/Categories';

import KeyValueTemplate from '@components/Post/KeyValueTemplate';
import KeyValueTemplateV2 from '@components/Post/KeyValueTemplateV2';
import { TemplateProps } from '@components/Post/TemplateProps';

export const categoriesTotemplates: { [Catrgory in Categories]: React.FC<TemplateProps> } = {
  ['choseong']: KeyValueTemplateV2,
  ['4word']: KeyValueTemplateV2,
  ['sokdam']: KeyValueTemplateV2,
};
