console.log('starting app');

//https://nodejs.org/docs/latest/api/
const fs = require('fs');//import file system
const os = require('os');//import OS

var user = os.userInfo()
fs.appendFileSync('greeting.txt', `hellow javascript, ${user.username}`);
console.log(user);
