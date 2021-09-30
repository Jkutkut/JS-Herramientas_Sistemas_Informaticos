/**
 * @param {Array[String]} binString - String with the binary representation of each character separated by a space.
 * @returns String Array with all the characters according to the ASCII code.
 */
function binary2textConverter(binString) {
    let binArr = binString.split(" ");

    let binCode = [];
    let codes = [];
    for (let i = 0; i < binArr.length; i++) {
        let code = parseInt(binArr[i], 2);

        codes.push(code);
        binCode.push(String.fromCharCode(code));
    }
    return {
        input: binArr,
        codes: codes.join(" "),
        output: binCode.join("")
    }
}


if (typeof require !== 'undefined' && require.main === module) {
    const input = '1001000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100';

    console.log(binary2textConverter(input).output);
}