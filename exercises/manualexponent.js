function manualExponent(base, exponent) { 
    arr = Array(exponent).fill(base);
    const reducer = (base, exponent) => base * exponent;
    const result = arr.reduce(reducer);
    return result;
}

console.log(manualExponent(5, 5));