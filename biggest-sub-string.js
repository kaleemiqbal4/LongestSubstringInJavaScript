// # Biggest Substring without repeating character
var strArray = "abcdefghbijklmnopaqrstuvwxyzcd";
var output = [];
var noRepeatingResult = "";
for (let i = 0; i < strArray.length; i++) {
  if (noRepeatingResult.includes(strArray[i])) {
    output.push(noRepeatingResult);
    noRepeatingResult = "";
    noRepeatingResult += strArray[i];
  } else {
    noRepeatingResult += strArray[i];
  }
}
output.push(noRepeatingResult);
console.log(`--------SubString Array  is----------------`);
console.log(`${output}`);
var result = output.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(`longest substring is : ${result}`);
