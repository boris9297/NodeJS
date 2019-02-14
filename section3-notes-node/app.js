console.log('starting app');

//https://nodejs.org/docs/latest/api/
const fs = require('fs');//import file system
const os = require('os');//import OS
const notes = require('./notes');
const lodash = require('lodash');//lodash.com/docs/4.17.11
// var user = os.userInfo()
// fs.appendFileSync('greeting.txt', `hellow javascript, ${user.username}`);
// console.log(user);

// console.log(notes.addNote);
// console.log(notes.addNote());
// console.log(notes.add(3, 99));
console.log(lodash.isString('hello'));
console.log(lodash.isString(`hello`));
console.log(lodash.uniq(['hi',`hi`]));
console.log(lodash.uniq(['hi',`hi2`]));
