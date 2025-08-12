// ===================== split() ===================
// Splitting into Characters
const word = "hello";
const characters = word.split('');
console.log(characters);


// =================== You can split a string by a space ' ' to get an array of its words. ==============
const sentence = "JavaScript is a powerful language";
const words = sentence.split(' ');
console.log(words);


// ===========Splitting by a Comma=========
const tags = "tech,code,programming,sylhet";
const tagArray = tags.split(',');
console.log(tagArray);

// =================  The limit parameter tells the method to stop after finding a certain number of substrings. =============
const fruits = "Apple,Banana,Orange,Mango,Grape";
const firstTwoFruits = fruits.split(',', 2);

console.log(firstTwoFruits);
