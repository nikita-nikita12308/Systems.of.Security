const robin = require('./generator/robin');
const bignum = require('./bignum/bignum');
const IDEA = require('./idea/idea');
const fs = require('fs');

const min64 = bignum().minForDischarge(64);
const max64 = bignum().maxForDischarge(64);

const closedKey = robin(min64, max64);
const publicKey = robin(min64, max64);

console.log(closedKey);
console.log(publicKey);

const cipher = new IDEA(publicKey);

const input = fs.readFileSync(__dirname + '/input.txt');
const encrypted = cipher.encrypt(closedKey, input);

fs.writeFileSync(__dirname + '/close.txt', encrypted);
const closed = fs.readFileSync(__dirname + '/close.txt');

const decrypted = cipher.decrypt(closed);
fs.writeFileSync(__dirname + '/open.txt', decrypted);
