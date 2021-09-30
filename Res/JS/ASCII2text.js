function binary2ASCII(binArr) {
    var binCode = [];
    
    for (i = 0; i < binArr.length; i++) {
        binCode.push(String.fromCharCode(parseInt(binArr[i], 2)));
    }
    return binCode;
}


if (typeof require !== 'undefined' && require.main === module) {
    const input = '1001000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100';
    
    let t = binary2ASCII(input.split(" "));

    console.log(t.join(""));
}