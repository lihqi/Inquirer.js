/**
 * Nested Inquirer call
 */

import inquirer from '../src/index.mjs';

inquirer
  // @ts-expect-error 2024-06-29
  .prompt({
    type: 'list',
    name: 'chocolate',
    message: "What's your favorite chocolate?",
    choices: ['Mars', 'Oh Henry', 'Hershey'],
  })
  .then(() => {
    // @ts-expect-error 2024-06-29
    inquirer.prompt({
      type: 'list',
      name: 'beverage',
      message: 'And your favorite beverage?',
      choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull'],
    });
  });
