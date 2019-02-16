#!/usr/bin/env node
var inquirer = require('inquirer');
var addRegistry = require('../lib/add_registry')
var chooseRegistry = require('../lib/choose_registry')
var setRegistry = require('../lib/set_registry')

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
          { name: 'choose registry', value: 'choose_registry' },
          { name: 'clear registry configuration', value: 'clear_registry' }
        ],
        default: 'set_registry',
        // default: 'add_registry',
      }
    ]))

getAnswer().then(
  ({ action }) => {
    switch (action) {
      case 'add_registry':
        add_registry()
        break;
      case 'clear_registry':
        setRegistry(null)
        break;
      case 'choose_registry':
        chooseRegistry()
        break;
      default:

    }
  }
)