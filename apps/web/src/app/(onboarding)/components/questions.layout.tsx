'use client';

import React, { PropsWithChildren } from 'react';
import { OnboardPreview } from './onboard-preview';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const QuestionsLayout = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();
  return (
    <div className="container grid grid-cols-2 h-screen items-center">
      <div className="w-full max-w-lg space-y-6">
        <button
          type="button"
          onClick={back}
          className="flex space-x-2 text-sm text-gray-500 items-center transition duration-300 hover:text-gray-700"
        >
          <ArrowLeft /> <span>Back</span>
        </button>
        {children}
      </div>
      <div className="flex justify-end">
        <OnboardPreview />
      </div>
    </div>
  );
};
