function converterUpdate() {
    let number = document.getElementById("baseConverterInput").value;
    let baseFrom = document.getElementById("baseFrom").value;
    let baseTo = document.getElementById("baseTo").value;
    
    let output = baseConverter(number, baseFrom, baseTo);
    document.getElementById("baseConverterOutput").value = output;
}