#!/usr/bin/env node
var inquirer = require('inquirer');
var addRegistry = require('../lib/add_registry')
var chooseRegistry = require('../lib/choose_registry')
var setRegistry = require('../lib/set_registry')
var showRegistry = require('../lib/show_registry')
var startLocalServer = require('../lib/start_local_server')

var getAnswer = async () => (
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'what do you want?',
        choices: [
          { name: 'set registry to local & start local npm server', value: 'default' },
          { name: 'add registry preset', value: 'add_registry' },
          { name: 'choose registry', value: 'choose_registry' },
          { name: 'clear registry configuration', value: 'clear_registry' }
        ],
        default: 'default',
      }
    ]))

showRegistry()
getAnswer().then(
  ({ action }) => {
    switch (action) {
      case 'default':
        startLocalServer()
        break;
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