// function prettyPrice(base, extension) {

// }

const prettyPrice = (base, extension) => {
    baseString = base.toString();
    part = baseString.split(".")[0];
    part += extension.toString();
    return parseFloat(part);
}

console.log(prettyPrice(3.50, 0.95));