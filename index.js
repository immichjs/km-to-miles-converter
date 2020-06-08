function miles (m) {
    return `${m} Milhas é equivalente a ${(m * 1.60934).toPrecision(6)} Km`
}

console.log(miles(22))