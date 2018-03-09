/*eslint-env browser */

var coinFlip;
var x;
for (x = 1; x <= 10; x += 1) {
    coinFlip = Math.round(Math.random());
    
    if (coinFlip == 0) {
   window.console.log("Heads"); 
} else {
   window.console.log("Tails"); 
}
}
