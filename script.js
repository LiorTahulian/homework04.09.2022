let x = Number(prompt("Enter a number please:"));
let y = Number(prompt("Enter another number please:"));
let operation = prompt("Choose one of the following: +, -, *, /");


if (operation == "+") {
    alert("the answer is: " + (x+y));
} else if (operation == "-") {
    alert("the answer is: " + (x-y));
} else if (operation == "*") {
    alert("the answer is: " + (x*y));
} else if (operation == "/") {
    alert("the answer is: " + (x/y));
} else {
    alert("There is a problem with your choise.")
}