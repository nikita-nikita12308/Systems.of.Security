const robin = require('./generator/robin');
const bignum = require('./bignum/bignum');

const min64 = bignum().minForDischarge(64);
const max64 = bignum().maxForDischarge(64);

const primeNum1 = robin(min64, max64);
const primeNum2 = robin(min64, max64);

console.log('First prime number with discharge 64: ' + primeNum1);
console.log('Second prime number with discharge 64: ' + primeNum2);
