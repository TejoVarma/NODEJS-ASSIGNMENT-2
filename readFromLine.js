const readline = require('readline')

let inputRead  = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
inputRead.question(`What's your name? \n`, name => {
    console.log(`\nHi ${name}`);
    inputRead.close();
});
