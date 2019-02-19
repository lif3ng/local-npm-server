const { execSync } = require('child_process');
var commandExists = require('command-exists').sync;

const getRegistry = (buf) => buf.toString().replace('\n', '')

module.exports = () => {
  const cmds = ['npm', 'yarn']
  cmds.forEach((cmd) => {
    if (commandExists(cmd)) {
      const registry = getRegistry(execSync(`${cmd} config get registry`))
      console.log(`${cmd} registry:\t${registry}`)
    }
  })
}