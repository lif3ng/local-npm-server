var inquirer = require('inquirer');
var fs = require('fs')
var os = require('os')
var path = require('path')

let filePath;

module.exports = () => {
  inquirer.prompt([
    {
      name: 'url',
      message: 'registry URL',
      type: 'input',
      validate:function (val) {
        const done = this.async();
        if(!val){
          done('please input name',false)
        }
        done(null,true)
      }
    },
    {
      name: 'name',
      message: 'registry show name',
      validate: function (val) {
        const done = this.async();
        if(!val){
          done('please input name',false)
        }
        filePath = path.join(__dirname, `../registry_preset/${val}.json`)
        if (fs.existsSync(filePath)) {
          done(`'${val}' is exists, please input another name`,false)
          // return false
        }
        done(null, true)

      }
    }
  ]).then(({ url, name }) => {
    fs.writeFileSync(filePath, JSON.stringify({url}))
  }).then(()=>{
    console.log('done')
  })
}