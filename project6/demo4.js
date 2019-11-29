const input = new String(process.argv[2]);

if (
  input.indexOf('@') === 0
  | input.lastIndexOf('.') === input.length + 1
  | input.indexOf('@.') !== -1
  | input.indexOf('.@') !== -1
  | input.indexOf('@') === -1
) {
  console.log(false);
} else {
  console.log(true);
}
