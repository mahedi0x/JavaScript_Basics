const country = "Bangladeshi";

const division = "Sylhet";
const district = `Am Baria`;
const thana = new String("Demra");

// console.log(typeof country);
// console.log(typeof district);
// console.log(typeof thana); // object


const name = "Mahedi";
const city = "Sylhet";
const intro = `Hello, my name is ${name} and I live in ${city}.`;
// console.log(intro);

const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[0]);

// now i try to change in first element  of capital
capital[0] = 'F';
console.log(capital);  //-------------- we don't change it because String is immutable ---- >>> not changeable  --------------------



// ======================== Multiline string =================================
const poem = `
  The sun is shining,
  The birds are singing,
  A perfect day for coding.
`;

console.log(poem);
