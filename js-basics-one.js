// Basics 1
let x = [];
console.log(x);
x.push('coding', 'dojo', 'rocks');
x.pop()
console.log(x);

// Basics 2
const y = [];
y.push(88);
console.log(y);

// Basics 3
let z = [9, 10, 6, 5, -1, 20, 13, 2];
for (let num in z) {
    console.log(z[num]);
}

for (let num in z) {
    if (num == 0) {
        continue;
    }
    console.log(z[num]);
}

// Basics 4
let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names.length);

for (let name in names) {
    if (names[name].length === 5) {
        console.log(names[name]);
    }
    continue;
}

// Basics 5
var yell = (string) => { console.log(string.toUpperCase())}
yell("danny");