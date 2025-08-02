let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
  console.log("Welcome! Checking your access level...");
  if (userRole === "admin") {
    console.log("You have admin access.");
  } else {
    console.log("You have standard user access.");
  }
} 
else {
  console.log("Please log in to continue.");
}
