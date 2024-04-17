'use client';

import { cn, useOnboardStore } from '@igot.ai/client';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

const WorkspaceSetup = () => {
  const { workspace, setOnboardState } = useOnboardStore();

  const disabled = !workspace.name || !workspace.company || !workspace.team;

  return (
    <React.Fragment>
      <h3 className="text-2xl font-bold">Let&apos;s setup your workspace!</h3>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" value="Workspace name" />
          <TextInput
            id="name"
            placeholder="Write a catchy name"
            required
            value={workspace.name}
            onChange={(e) =>
              setOnboardState({
                workspace: { ...workspace, name: e.target.value },
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" value="Company name" />
          <TextInput
            id="company"
            placeholder="Enter a name"
            required
            value={workspace.company}
            onChange={(e) =>
              setOnboardState({
                workspace: { ...workspace, company: e.target.value },
              })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="team" value="Team size" />
          <Select
            id="team"
            required
            placeholder="Select team size"
            value={workspace.team}
            onChange={(e) =>
              setOnboardState({
                workspace: { ...workspace, team: Number(e.target.value) },
              })
            }
          >
            <option>Select team size</option>
            {Array.from({ length: 25 }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </Select>
        </div>
      </form>
      <Link
        href="/onboard/workspace"
        className={cn('inline-block', {
          'pointer-events-none cursor-not-allowed': disabled,
        })}
        passHref
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        <Button color="dark" {...{ disabled }}>
          Next
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default WorkspaceSetup;
