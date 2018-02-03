function magic_multiply(x, y) {
    if (typeof y === "string") {
        console.log("Error: Cannot multiply by string");
        return;
    }

    if (typeof x === "object") {
        for (var num in x) {
            x[num] = x[num] * y;
        }
    }
    return x * y;
}

let test = magic_multiply([1, 2, 3], 2);
console.log(test);