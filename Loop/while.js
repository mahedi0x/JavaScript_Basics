const number = 7;

if (number > 0) {
  // console.log("Number is Positive");
}

// let num = 1;
// while(num <= 5){
//     console.log(num);
//     num++;
// }



let num = 1;
sum = 0;
while (num <= 20) {
  // console.log(`Number is ${num}`);
  if(num % 2 == !0){
    console.log(`Odd Number = ${num}`);
  }
  sum += num;
  num++;
}
console.log("Total Sum of All Numbers = ", sum);
