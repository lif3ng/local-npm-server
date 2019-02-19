const { execSync } = require('child_process');
var commandExists = require('command-exists').sync;

const getRegistry = (buf) => buf.toString().replace('\n', '')

module.exports = (registry) => {
  const cmds = ['npm', 'yarn']
  cmds.forEach((cmd) => {
    if (commandExists(cmd)) {
      const oldRegistry = getRegistry(execSync(`${cmd} config get registry`))

      if (registry) {
        execSync(`${cmd} config set registry ${registry}`)
      } else {
        execSync(`${cmd} config delete registry`);
      }

      const newRegistry = getRegistry(execSync(`${cmd} config get registry`))

      console.log(`${cmd} registry:\n  ${oldRegistry} -> ${newRegistry}`)
    }
  })
  console.log('Done')
}