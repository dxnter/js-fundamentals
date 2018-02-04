let zeroNegative = (arr) => {
    for (var value in arr) {
        if (arr[value] < 0) {
            return false;
        }
    }
    return true;
}

let isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

let howManyEven = (arr) => {
    let count = 0;
    for (var value in arr) {
        if (isEven(arr[value])) {
            count++;
        }
    }
    return count;
}

let createDummyArray = (n) => {
    let newArr = [];
    for (var i = 0; i < n; i++) {
        newArr.push(Math.floor(Math.random() * 10))
    }
    return newArr;
}

let randomChoice = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}