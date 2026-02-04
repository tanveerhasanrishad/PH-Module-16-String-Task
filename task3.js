const sentence = "aeiouac";
const str = sentence.toLowerCase();

const result =
  str.includes("a") &&
  str.includes("e") &&
  str.includes("i") &&
  str.includes("o") &&
  str.includes("u");

if (result == true) {
  console.log("Contains all vowels....");
} else {
  console.log("Not contains all vowels....");
}
