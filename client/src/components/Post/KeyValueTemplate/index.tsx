import { TemplateProps } from '@components/Post/TemplateProps';

import { GameContextProvider } from './GameContext';
import TemplateInner from './TemplateInner';

const KeyValueTemplate: React.FC<TemplateProps> = ({ category, elements }) => {
  return (
    <GameContextProvider>
      <TemplateInner category={category} elements={elements} />
    </GameContextProvider>
  );
};

export default KeyValueTemplate;
