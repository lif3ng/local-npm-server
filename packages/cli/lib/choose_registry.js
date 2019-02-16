var inquirer = require('inquirer');
var { execSync } = require('child_process')
var path = require('path')
var fs = require('fs');
var setRegistry = require('./set_registry')

module.exports = () => {
  // const result = execSync(`ls ${__dirname}/../registry_preset`).toString()
  const presetFileArr = fs.readdirSync(`${__dirname}/../registry_preset`)
  const presetChoices = presetFileArr.map((file) => ({
    name: file.substr(0, file.length - 5),
    value: file
  }));

  inquirer.prompt([
    {
      name: 'filename',
      message: 'Please select registry',
      type: 'list',
      choices: presetChoices
    }
  ]).then(({ filename }) => {
    const file = fs.readFileSync(`${__dirname}/../registry_preset/${filename}`)
    const { url } = JSON.parse(file.toString())
    setRegistry(url)
  })
}