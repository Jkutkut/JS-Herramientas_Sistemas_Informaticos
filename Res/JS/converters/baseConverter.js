function baseConverter(numberString, baseFrom, baseTo) {
    return parseInt(numberString, baseFrom).toString(baseTo);
}


if (typeof require !== 'undefined' && require.main === module) {
    console.log(baseConverter("100010100010001", 2, 16));
}