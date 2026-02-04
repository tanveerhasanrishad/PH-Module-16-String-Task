const str = "   i am a student Of Daffodil   ";
const str2 = str.trim().split(" ");
let res = [];
for (let ele of str2) {
  let result = ele[0].toUpperCase() + ele.slice(1);
  res = res + " " + result;
  console.log(result);
}
console.log(res.trim());
