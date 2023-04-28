import { TemplateProps } from '@components/Post/TemplateProps';

import { GameContextProvider } from './GameContext';
import TemplateInner from './TemplateInner';

const KeyValueTemplate: React.FC<TemplateProps> = ({ elements }) => {
  return (
    <GameContextProvider>
      <TemplateInner elements={elements} />
    </GameContextProvider>
  );
};

export default KeyValueTemplate;
