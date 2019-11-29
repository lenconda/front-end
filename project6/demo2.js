const array = new Array(11).fill(null).map((value, index) => index);

let luckyNumbers = [];

while (luckyNumbers.length < 3) {
  const seed = Math.floor(Math.random() * 11);
  const luckyNumber = array[seed];

  if (!luckyNumbers.includes(luckyNumber)) {
    luckyNumbers.push(luckyNumber);
  }
}

console.log(luckyNumbers);
