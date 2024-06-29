/**
 * Raw List prompt example
 */

import inquirer from '../src/index.mjs';

inquirer
  // @ts-expect-error 2024-06-29
  .prompt([
    {
      type: 'rawlist',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'Order a pizza',
        'Make a reservation',
        // @ts-expect-error 2024-06-29
        new inquirer.Separator(),
        'Ask opening hours',
        'Talk to the receptionist',
      ],
    },
    {
      type: 'rawlist',
      name: 'size',
      message: 'What size do you need',
      choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
