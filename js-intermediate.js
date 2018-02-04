const starString = num => {
	let string = '';
	for (let i = 0; i < num; i++) {
		string += '*';
	}
	return string;
};

function drawStars(arr) {
	for (const val in arr) {
		if (typeof arr[val] === 'string') {
			console.log(arr[val][0].toLowerCase().repeat(arr[val].length));
			continue;
		}
		console.log('*'.repeat(arr[val]));
	}
}
drawStars(['STRING', 1, 5, 6]);
