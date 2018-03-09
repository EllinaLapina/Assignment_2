/*eslint-env browser */

var coinFlip = Math.round(Math.random());
var choice = window.prompt("Choose: heads or tails");
var result;

if (choice === "heads") {
    result = 0;
} else {
    result = 1;
}

if (coinFlip == 0 && result == 0) {
   window.document.write("The flip was heads and you chose heads...you win!");
} else if (coinFlip == 0 && result == 1){
   window.document.write("The flip was heads but you chose tails...you lose!");
} else if (coinFlip == 1 && result == 0) {
    window.document.write("The flip was tails but you chose heads...you lose!");
} else if (coinFlip == 1 && result == 1) {
    window.document.write("The flip was tails and you chose tails...you win!");
}