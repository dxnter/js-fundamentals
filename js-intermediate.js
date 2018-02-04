let starString = (num) => {
    var string = "";
    for (var i = 0; i < num; i++) {
        string += "*"
    }
    return string;
}

function drawStars(arr) {
    for (let val in arr) {
        if (typeof arr[val] === "string") {
            console.log(arr[val][0].repeat(arr[val].length));
        }
        console.log("*".repeat(arr[val]));
    }
}