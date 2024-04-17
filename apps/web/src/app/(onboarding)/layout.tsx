import React, { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { OnboardWrapper } from './components';

export const metadata: Metadata = {
  title: 'Onboard Customer',
};

const OnboardingLayout = ({ children }: PropsWithChildren) => {
  return <OnboardWrapper>{children}</OnboardWrapper>;
};

export default OnboardingLayout;
