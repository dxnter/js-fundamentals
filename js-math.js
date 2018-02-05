const zeroNegative = arr => {
	for (const value in arr) {
		if (arr[value] < 0) {
			return false;
		}
	}
	return true;
};

const isEven = num => {
	if (num % 2 === 0) {
		return true;
	}
	return false;
};

const howManyEven = arr => {
  let
  count = 0;
	for (const value in arr) {
		if (isEven(arr[value])) {
			count++;
		}
	}
	return count;
};

const createDummyArray = n => {
	const newArr = [];
	for (let i = 0; i < n; i++) {
		newArr.push(Math.floor(Math.random() * 10));
	}
	return newArr;
};

const randomChoice = arr => {
	const random = Math.floor(Math.random() * arr.length);
	return arr[random];
};
