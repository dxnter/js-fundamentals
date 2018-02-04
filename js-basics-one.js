// Basics 1
const x = [];
console.log(x);
x.push('coding', 'dojo', 'rocks');
x.pop();
console.log(x);

// Basics 2
const y = [];
y.push(88);
console.log(y);

// Basics 3
const z = [9, 10, 6, 5, -1, 20, 13, 2];
for (const num in z) {
	console.log(z[num]);
}

for (const num in z) {
	if (num == 0) {
		continue;
	}
	console.log(z[num]);
}

// Basics 4
const names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names.length);

for (const name in names) {
	if (names[name].length === 5) {
		console.log(names[name]);
	}
	continue;
}

// Basics 5
const yell = string => {
	console.log(string.toUpperCase());
};
yell('danny');
