const exec = require('child_process').exec

exec('node ../bin/cyril.js add', (error, stdout, stderr) => {
    if (error){
        console.log(error.stack)
        process.exit()
    }
    console.log(stdout)
})
