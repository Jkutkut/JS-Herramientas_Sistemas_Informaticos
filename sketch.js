function baseConverterUpdate() {
    let number = document.getElementById("baseConverterInput").value;
    let baseFrom = document.getElementById("baseFrom").value;
    let baseTo = document.getElementById("baseTo").value;
    
    let output = baseConverter(number, baseFrom, baseTo);
    document.getElementById("baseConverterOutput").value = output;
}


function ascii2binConverter() {
    let content = document.getElementById("ascii2binaryInput").value;

    let output = text2binaryConverter(content);

    document.getElementById("ascii2binaryOutputCode").value = output.codes;
    document.getElementById("ascii2binaryOutputBin").value = output.output;
}

function bin2asciiConverter() {
    let content = document.getElementById("binary2asciiInput").value;

    let output = binary2textConverter(content);

    document.getElementById("binary2asciiOutputCode").value = output.codes;
    document.getElementById("binary2asciiOutputBin").value = output.output;
}
