const str = "i AAA aaaa am rishad";
let count = 0;
for (const i of str) {
  if (i == "a" || i == "A") {
    count++;
  }
}

console.log(count);
