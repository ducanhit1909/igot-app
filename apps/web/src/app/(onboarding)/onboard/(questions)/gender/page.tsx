'use client';

import { cn, useOnboardStore } from '@igot.ai/client';
import { Button, Label, Radio } from 'flowbite-react';
import Link from 'next/link';
import React, { ChangeEvent } from 'react';

const GENDERS = [
  { name: 'Female', value: 'female' },
  { name: 'Male', value: 'male' },
  { name: 'Other', value: 'other' },
];

const AskGender = () => {
  const { setOnboardState, gender } = useOnboardStore();

  // Function to handle radio button change
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setOnboardState({ gender: event.target.value as any });
  };

  return (
    <React.Fragment>
      <h3 className="text-2xl font-bold">
        Are you a unicorn, a mermaid, or something else fantastical?
      </h3>
      <form className="flex items-center space-x-2">
        {GENDERS.map(({ value, name }) => (
          <Label
            key={value}
            htmlFor={value}
            className="flex items-center gap-2 py-3 px-4 border border-gray-300 rounded-lg cursor-pointer"
          >
            <Radio
              {...{ onChange }}
              id={value}
              name="gender"
              value={value}
              checked={gender === value}
            />
            <span>{name}</span>
          </Label>
        ))}
      </form>
      <Link
        href="/onboard/workspace"
        className={cn('inline-block', {
          'pointer-events-none cursor-not-allowed': !gender,
        })}
        passHref
        aria-disabled={!gender}
        tabIndex={!gender ? -1 : undefined}
      >
        <Button color="dark" disabled={!gender}>
          Next
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default AskGender;
