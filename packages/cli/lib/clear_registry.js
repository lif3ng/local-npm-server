const { execSync } = require('child_process');
var commandExists = require('command-exists').sync;

module.exports = () => {
  console.log('clear registry')
  if (commandExists('npm')) {
    execSync('npm config delete registry')
    console.log('clear npm registry')
  }
  if (commandExists('yarn')) {
    execSync('yarn config delete registry')
    console.log('clear yarn registry')
  }
  console.log('Done')
}