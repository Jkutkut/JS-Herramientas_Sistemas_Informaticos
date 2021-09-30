/**
 * @param {String} text - String with the text you want to convert.
 * @param {optional|boolean} log - Whenever you want extra log messages or no.
 * @returns A custom object with all the data generated.
 * 
 * @example {input: "f", codes: "102", output: "1100110"}
 */
function text2binaryConverter(text, log=true) {
    let output = [];
    let codes = [];
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        let bin = (code >>> 0).toString(2);
        if (log) {
            console.log(`${text[i]} -> ${code} -> ${bin}`);
        }
        codes.push(code);
        output.push(bin);
    }

    return {
        input: text,
        codes: codes.join(" "),
        output: output.join(" ")
    }
}



if (typeof require !== 'undefined' && require.main === module) {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(
        "Enter the text: ",
        (text) => {
            console.log(text2binaryConverter(text).output);
            readline.close(); // Stop using the screen
        }
    );
}