'use client';

import { useOnboardStore } from '@igot.ai/client';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

const AskName = () => {
  const { name, setOnboardState } = useOnboardStore();
  const { push } = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;

    push('/onboard/gender');
  };

  return (
    <div className="w-full h-screen grid place-content-center">
      <form
        {...{ onSubmit }}
        className="border-2 border-white rounded-full p-16 w-[480px] h-[480px] backdrop-blur-sm text-center bg-gradient-to-br from-white to-white/10 space-y-5 flex-col flex items-center justify-center"
      >
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-600">Welcome aboard!</p>
          <h3 className="text-2xl font-bold">What should we call you?</h3>
        </div>
        <input
          autoFocus
          type="text"
          placeholder="Your name"
          value={name}
          className="text-5xl border-none border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 text-center font-extrabold"
          onChange={(e) => setOnboardState({ name: e.target.value })}
        />
      </form>
    </div>
  );
};

export default AskName;
