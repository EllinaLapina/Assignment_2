/*eslint-env browser */

var firstInteger;
var secondInteger;

firstInteger = parseInt(window.prompt("Enter the first number"), 10);
secondInteger = parseInt(window.prompt("Enter the second number"), 10);

if (firstInteger > secondInteger) {
    window.document.write(firstInteger + " is a larger number.");
} else if (firstInteger < secondInteger) {
    window.document.write(secondInteger + " is a larger number.");
} else {
    window.document.write("The numbers are equal.");
}
