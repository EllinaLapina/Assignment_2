/*eslint-env browser */

var gradeUrsula = parseInt(window.prompt("Enter grade for Ursula."));
var gradePaul = parseInt(window.prompt("Enter grade for Paul."));
var gradeHenry = parseInt(window.prompt("Enter grade for Henry."));
var gradeTabitha = parseInt(window.prompt("Enter grade for Tabitha."));
var gradeLucy = parseInt(window.prompt("Enter grade for Lucy."));

window.console.log("Students    Grade");

if (gradeUrsula < 60) {
    window.console.log("Ursula   F");
} else if (gradeUrsula < 70) {
    window.console.log("Ursula   D");
} else if (gradeUrsula < 80) {
    window.console.log("Ursula   C");
} else if (gradeUrsula < 90) {
    window.console.log("Ursula   B");
} else {
    window.console.log("Ursula   A");
}

if (gradePaul < 60) {
    window.console.log("Paul   F");
} else if (gradePaul < 70) {
    window.console.log("Paul   D");
} else if (gradePaul < 80) {
    window.console.log("Paul   C");
} else if (gradePaul < 90) {
    window.console.log("Paul   B");
} else {
    window.console.log("Paul   A");
}

if (gradeHenry < 60) {
    window.console.log("Henry   F");
} else if (gradeHenry < 70) {
    window.console.log("Henry   D");
} else if (gradeHenry < 80) {
    window.console.log("Henry   C");
} else if (gradeHenry < 90) {
    window.console.log("Henry   B");
} else {
    window.console.log("Henry   A");
}

if (gradeTabitha < 60) {
    window.console.log("Tabitha   F");
} else if (gradeTabitha < 70) {
    window.console.log("Tabitha   D");
} else if (gradeTabitha < 80) {
    window.console.log("Tabitha   C");
} else if (gradeTabitha < 90) {
    window.console.log("Tabitha   B");
} else {
    window.console.log("Tabitha   A");
}

if (gradeLucy < 60) {
    window.console.log("Lucy   F");
} else if (gradeLucy < 70) {
    window.console.log("Lucy   D");
} else if (gradeLucy < 80) {
    window.console.log("Lucy   C");
} else if (gradeLucy < 90) {
    window.console.log("Lucy   B");
} else {
    window.console.log("Lucy   A");
}


var averageGrade = (gradeUrsula + gradePaul + gradeHenry + gradeTabitha + gradeLucy) / 5;

window.console.log("Average points: " + averageGrade);
