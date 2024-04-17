'use client';

import { useOnboardStore } from '@igot.ai/client';
import { Avatar } from 'flowbite-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { User } from 'flowbite-react-icons/outline';
import { snakeCase } from 'lodash';
import Image from 'next/image';
import React from 'react';

export const OnboardPreview = () => {
  const { gender, name, workspace } = useOnboardStore();
  return (
    <div className="min-w-[512px] p-6 rounded-3xl border-4 border-gray-100/90 bg-gradient-to-r from-white to-white/10 grid place-content-center space-y-4 text-center">
      <div className="w-16 h-16 relative aspect-square bg-white rounded-full grid place-content-center mx-auto">
        {renderAvatar(gender)}
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      {(!!workspace.name || !!workspace.company || !!workspace.team) && (
        <div className="rounded-3xl p-4 bg-gradient-to-b from-white/15 to-[#CEEADD] min-w-[440px] text-left">
          <div className="backdrop-blur p-6 rounded-[calc(1.5rem-2px)] space-y-4">
            <div className="rounded-[40px] border-2 border-gray-50 divide-x-2 divide-gray-50 text-sm font-medium">
              <span className="px-4 py-2 inline-block text-gray-900">
                {workspace.name || '|'}
              </span>
              <span className="px-4 py-2 inline-block text-gray-700">
                {snakeCase(workspace.name) || (
                  <span className="text-gray-400">workspace_id</span>
                )}
                .igot.ai
              </span>
            </div>
            {(!!workspace.company || !!workspace.team) && (
              <div className="flex items-center justify-between">
                <p className="px-4 py-2 text-gray-900 font-medium">
                  {workspace.company || '|'}
                </p>
                {!!workspace.team && (
                  <Avatar.Group>
                    {Array.from({
                      length: workspace.team <= 3 ? workspace.team : 3,
                    }).map((_, i) => (
                      <Avatar key={i} rounded stacked />
                    ))}
                    {workspace.team > 3 && (
                      <Avatar.Counter
                        total={Number(workspace.team) - 3}
                        href="#"
                      />
                    )}
                  </Avatar.Group>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function renderAvatar(gender?: 'male' | 'female' | 'other') {
  switch (gender) {
    case 'male':
      return (
        <Image
          src="/images/onboard/users/male.svg"
          fill
          className="object-contain p-1"
          quality={100}
          priority
          alt="Male"
        />
      );
    case 'female':
      return (
        <Image
          src="/images/onboard/users/female.svg"
          fill
          className="object-contain p-1"
          priority
          quality={100}
          alt="Female"
        />
      );
    case 'other':
      return (
        <Image
          src="/images/onboard/users/other.svg"
          fill
          className="object-contain p-1"
          priority
          quality={100}
          alt="Other"
        />
      );

    default:
      return <User className="w-10 h-10" />;
  }
}
