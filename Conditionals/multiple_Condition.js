
// ====================== Logical AND (&&) ========================
let age = 20;
let hasPassedWrittenTest = true;

if (age >= 18 && hasPassedWrittenTest) {
  console.log("You are eligible for a driver's license."); 
} else {
  console.log("You are not eligible yet.");
}



// ======================= Logical OR (||) =======================
let orderTotal = 35;
let isPremiumMember = true;

if (orderTotal > 50 || isPremiumMember) {
  console.log("You get free shipping!"); 
} else {
  console.log("Shipping fee will be applied.");
}


// ====================== Combining AND (&&) and OR (||) =======================
let isVip = true;
let isWeekend = true; 
let hasSpecialPass = false;

if (isVip && (isWeekend || hasSpecialPass)) {
  console.log("Welcome to the VIP lounge!"); // This will run
} else {
  console.log("Access denied.");
}