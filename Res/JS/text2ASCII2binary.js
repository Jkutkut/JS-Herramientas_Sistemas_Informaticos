/**
 * @param {String} text - String with the text you want to convert.
 * @param {optional|boolean} log - Whenever you want extra log messages or no.
 * @returns A string with all the binary numbers between spaces.
 */
function text2ASCII2binary(text, log=true) {
    let t = [];
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        let bin = (code >>> 0).toString(2);;
        if (log) {
            console.log(`${text[i]} -> ${code} -> ${bin}`);
        }
        t.push(bin);
    }
    return t.join(" ");
}



if (typeof require !== 'undefined' && require.main === module) {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(
        "Enter the text: ",
        text => {
            console.log(text2ASCII2binary(text));
            readline.close(); // Stop using the screen
        }
    );
}