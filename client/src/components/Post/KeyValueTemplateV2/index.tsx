import { shuffleArray } from '@utils/shuffle';

import { TemplateProps } from '../TemplateProps';
import Template from './Template';
import { keyValueBuilder } from './model/keyValueBuilder';
import { TemplateReducer, TemplateState, useTemplate } from './useTemplate';

const reducer: TemplateReducer = (state: TemplateState, action: any) => {
  switch (action.type) {
    default:
      return useTemplate.reducer(state, action);
  }
};

function KeyValueTemplate({ category, elements }: TemplateProps) {
  const { state, initialize, guessSuccess, guessWrong, timeout, next, over } = useTemplate(reducer);

  if (state.status === 'notinit') {
    shuffleArray(elements);
  }

  const keyValues = keyValueBuilder(category, elements);

  return (
    <Template value={{ category, keyValues, state }}>
      <Template.Setter onClick={initialize} />
      <Template.Guess onSuccess={guessSuccess} onWrong={guessWrong} />
      <Template.StartBtn onNext={next} onTimeout={timeout} />
      <Template.SuccessResult>
        <Template.NextBtn onNext={next} onTimeout={timeout} />
        <Template.RestartBtn onClick={over} />
      </Template.SuccessResult>
      <Template.WrongResult>
        <Template.NextBtn onNext={next} onTimeout={timeout} />
        <Template.RestartBtn onClick={over} />
      </Template.WrongResult>
    </Template>
  );
}

export default KeyValueTemplate;
