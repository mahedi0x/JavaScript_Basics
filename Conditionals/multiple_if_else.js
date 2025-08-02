let score = 85;
let grade;

if (score >= 90) {
  grade = 'A';
} 
else if (score >= 80) {
  grade = 'B'; // This block will run
} 
else if (score >= 70) {
  grade = 'C';
} 
else {
  grade = 'F';
}

console.log(`A score of ${score} gets a grade of '${grade}'.`);