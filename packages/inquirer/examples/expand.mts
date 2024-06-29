/**
 * Expand list examples
 */

import inquirer from '../src/index.mjs';

inquirer
  // @ts-expect-error 2024-06-29
  .prompt([
    {
      type: 'expand',
      message: 'Conflict on `file.js`: ',
      name: 'overwrite',
      choices: [
        {
          key: 'y',
          name: 'Overwrite',
          value: 'overwrite',
        },
        {
          key: 'a',
          name: 'Overwrite this one and all next',
          value: 'overwrite_all',
        },
        {
          key: 'd',
          name: 'Show diff',
          value: 'diff',
        },
        // @ts-expect-error 2024-06-29
        new inquirer.Separator(),
        {
          key: 'x',
          name: 'Abort',
          value: 'abort',
        },
      ],
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
