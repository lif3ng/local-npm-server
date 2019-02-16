#!/usr/bin/env node
var inquirer = require('inquirer');
var add_registry = require('../lib/add_registry')
var clear_registry = require('../lib/clear_registry')

var getAnswer = async () => (
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'what do you want?',
        choices: [
          { name: 'start local npm server & set npm/yarn registry', value: 'default' },
          { name: 'add registry preset', value: 'add_registry' },
          { name: 'clear registry configuration', value: 'clear_registry' }
        ],
        default: 'add_registry'
      }
    ]))

getAnswer().then(
  ({ action }) => {
    switch (action) {
      case 'add_registry':
        add_registry()
        break;
      case 'clear_registry':
        clear_registry()
        break;
      default:

    }
  }
)



module.exports = cli;

function cli() {
  // TODO
}
