let x = Number(prompt("Enter a number please:"));
let y;
let operation;

if (isNaN (x)) {
    alert ("Your first choise is not a number.");
} else {
    y = Number(prompt("Enter another number please:"));
    if (isNaN (y)) {
        alert ("Your second choise is not a number.");
    } else {
        operation = prompt("Choose one of the following: +, -, *, /");
        if (operation == "+") {
            alert("the answer is: " + (x+y));
        } else if (operation == "-") {
            alert("the answer is: " + (x-y));
        } else if (operation == "*") {
            alert("the answer is: " + (x*y));
        } else if (operation == "/") {
            alert("the answer is: " + (x/y));
        } else {
            alert("There is a problem with your choise.");
        }
    }   
}