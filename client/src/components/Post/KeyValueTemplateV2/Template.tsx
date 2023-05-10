import {
  Guess,
  NextBtn,
  RestartBtn,
  Setter,
  StartBtn,
  SuccessResult,
  WrongResult,
} from './components';
import { TemplateProvider, TemplateValue } from './useTemplateContext';

function Template({ children, value }: { children: React.ReactNode; value: TemplateValue }) {
  return <TemplateProvider value={value}>{children}</TemplateProvider>;
}

Template.Setter = Setter;
Template.Guess = Guess;
Template.StartBtn = StartBtn;
Template.SuccessResult = SuccessResult;
Template.WrongResult = WrongResult;
Template.NextBtn = NextBtn;
Template.RestartBtn = RestartBtn;

export default Template;
