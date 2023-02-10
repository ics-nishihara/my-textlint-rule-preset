const path = require("path")
const getConfigPath=()=> {
  return path.resolve(__dirname,".textlintrc")
} 

module.exports = {
  configPath:getConfigPath()
}
