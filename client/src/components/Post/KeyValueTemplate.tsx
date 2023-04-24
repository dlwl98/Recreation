import Spacing from '@ds/Spacing';

import { TemplateProps } from './TemplateProps';

const KeyValueTemplate: React.FC<TemplateProps> = ({ elements }) => {
  return (
    <>
      {elements.map((element, i) => (
        <div key={`element_${i}`}>
          <div>{i + 1}번</div>
          <div>문제: {element.quiz}</div>
          <div>정답: {element.answer}</div>
          <Spacing />
        </div>
      ))}
    </>
  );
};

export default KeyValueTemplate;
