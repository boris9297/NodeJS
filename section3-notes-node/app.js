console.log('starting app');

//https://nodejs.org/docs/latest/api/
const fs = require('fs');//import file system
const os = require('os');//import OS
const notes = require('./notes');
const lodash = require('lodash');//lodash.com/docs/4.17.11
const yargs = require('yargs');
// var user = os.userInfo()
// fs.appendFileSync('greeting.txt', `hellow javascript, ${user.username}`);
// console.log(user);

// console.log(notes.addNote);
// console.log(notes.addNote());
// console.log(notes.add(3, 99));
// console.log(lodash.isString('hello'));
// console.log(lodash.isString(4));
// console.log(lodash.uniq(['hi',`hi`]));
// console.log(lodash.uniq(['hi',`hi2`,'2312']));

// console.log(process.argv)
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
