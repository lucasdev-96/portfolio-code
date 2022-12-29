/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useState } from 'react';

type ResumeContextProp = {
  children: ReactNode;
};

type ResumeContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const defaultValue = {
  language: '',
  setLanguage: () => {}
};

export const ResumeContext = createContext<ResumeContextType>(defaultValue);

export const ResumeContextProvider: React.FC<ResumeContextProp> = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  return (
    <ResumeContext.Provider value={{ language, setLanguage }}>{children}</ResumeContext.Provider>
  );
};
