const arr = [3,4,1,2];

for (var j = 0; j < arr.length - 1; j += 1) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

console.log(arr);
