const config = require('../templates')

module.exports = () => {
    for(let name in config.tpl){
        console.log(name)
    }
    process.exit()
}