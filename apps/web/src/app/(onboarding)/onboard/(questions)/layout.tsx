import React, { PropsWithChildren } from 'react';
import { QuestionsLayout } from '../../components';

const OnboardQuestionsLayout = ({ children }: PropsWithChildren) => {
  return <QuestionsLayout>{children}</QuestionsLayout>;
};

export default OnboardQuestionsLayout;
