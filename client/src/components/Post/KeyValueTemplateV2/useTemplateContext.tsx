import { createContext, useContext } from 'react';

import { Categories } from '@custom-types/Categories';

import { KeyValue } from './model/KeyValue';
import { TemplateState } from './useTemplate';

export type TemplateValue = {
  category: Categories;
  keyValues: KeyValue[];
  state: TemplateState;
};

const TemplateContext = createContext<TemplateValue | undefined>(undefined);

function TemplateProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: TemplateValue;
}) {
  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
}

function useTemplateContext() {
  const context = useContext(TemplateContext);
  if (context === undefined) {
    throw new Error('useTemplateContext must be used within a TemplateProvider');
  }
  return context;
}

export { TemplateProvider, useTemplateContext };
