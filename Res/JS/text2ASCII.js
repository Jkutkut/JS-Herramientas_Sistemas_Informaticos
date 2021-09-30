function dec2bin(dec) {
    return (dec >>> 0).toString(2);
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
readline.question('Name?', name => {
    console.log(`Hey there ${name}!`);

    for (let i = 0; i < name.length; i++) {
        let code = name.charCodeAt(i);
        console.log(`${name[i]} -> ${code} -> ${dec2bin(code)}`);
    }
    readline.close();
  });