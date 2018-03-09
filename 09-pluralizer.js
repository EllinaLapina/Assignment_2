/*eslint-env browser */

var number = window.prompt("Choose a number.");
var noun = window.prompt("Choose a noun.");
var nounPlural
if (number != 1) {
    
    if (noun == "mouse") {
    nounPlural = "mice"   
    } else if (noun == "goose") {
    nounPlural = "geese"   
    } else if (noun == "sheep") {
    nounPlural = "sheep"   
    } else {nounPlural = noun + "s";}
    
} else {
    nounPlural = noun;
}

document.write(number + " " + nounPlural);