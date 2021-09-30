function binary2ASCII(strArr) {

    var newBin = strArr.split(" ");
    var binCode = [];
    
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
    return binCode.join("");
}


if (typeof require !== 'undefined' && require.main === module) {
    const input = '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101';
    
    let t = binary2ASCII(input);

    console.log(t);
}