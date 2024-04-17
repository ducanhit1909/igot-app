'use client';

import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

const ASK_NAME = '/onboard';
const IS_COMPLETE = '/onboard/complete';

export const OnboardWrapper = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const background = pathname.includes(IS_COMPLETE)
    ? '/images/onboard/success.svg'
    : pathname === ASK_NAME
    ? '/images/onboard/hero.svg'
    : '/images/onboard/background.svg';

  return (
    <div
      style={{ backgroundImage: `url('${background}')` }}
      className="bg-no-repeat bg-center bg-cover min-h-screen w-full"
    >
      {children}
    </div>
  );
};
