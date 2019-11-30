const arr = new Array(10).fill(null).map((value, index) => 'Value is: ' + index);

console.log('for\n');

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
}

console.log('for...in\n');

for (let item in arr) {
  console.log(item);
}
