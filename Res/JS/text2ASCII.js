function dec2bin(dec) {
    return (dec >>> 0).toString(2);
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
readline.question('Name?', name => {
    console.log(`Hey there ${name}!`);
    let t = [];
    for (let i = 0; i < name.length; i++) {
        let code = name.charCodeAt(i);
        let bin = dec2bin(code);
        console.log(`${name[i]} -> ${code} -> ${bin}`);
        t.push(bin);
    }
    readline.close();
    console.log(t.join(" "));
  });