import { spawn } from 'node:child_process';

spawn('node', ['input.mjs'], {
  // @ts-expect-error 2024-06-29
  cwd: import.meta.dirname,
  stdio: 'inherit',
});
