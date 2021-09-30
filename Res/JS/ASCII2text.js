/**
 * @param {Array[String]} binArr - Array of strings with the binary representation of each character.
 * @returns String Array with all the characters according to the ASCII code.
 */
function binary2ASCII2text(binArr) {
    var binCode = [];
    for (i = 0; i < binArr.length; i++) {
        binCode.push(String.fromCharCode(parseInt(binArr[i], 2)));
    }
    return binCode;
}


if (typeof require !== 'undefined' && require.main === module) {
    const input = '1001000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100';

    console.log(binary2ASCII2text(input.split(" ")));
}