

let rainFall
let fertilizer
let fertilizerType
let yield = 50;
let yieldPlusRain
let finalYield



rainFall = prompt("How many inches of rain fell?", "Please enter a number.");
function repeatstringnumtimes(str){
    return str.repeat(rainFall)
}
console.log (repeatstringnumtimes("*", rainFall))

if (rainFall >= 20) {
    yieldPlusRain = (yield * .9)
    //this answer should be 45
}
else if (rainFall < 10) {
    yieldPlusRain = (yield * .8)
    //this answer should be 40
}
else {
    yieldPlusRain = yield
    //console.log (yieldPlusRain) 
    //this answer will be 50
}

fertilizer = prompt("Did you use fertilizer?", "Yes or No");
if (fertilizer === "yes" || fertilizer === "Yes") {
    fertilizerType = prompt("Did you use premium or regular fertilizer?");
} if (fertilizerType === "regular" || fertilizerType === "Regular") {
    finalYield = (yieldPlusRain * 1.1)
    console.log ("The yield should be", finalYield, "bushels per acre.")
    //if rainFall was over 20 this answer will be 49.5
    //if rainFall was between 10 and 20 this answer will be 55
    //if rainFall was under 10 this answer will be 44
} if (fertilizerType === "premium" || fertilizerType === "Premium") {
    finalYield = (yieldPlusRain * 1.15)
    console.log ("The yield should be", finalYield, "bushels per acre.")
    //if rainFall was over 20 this answer will be 51.75
    //if rainFall was between 10 and 20 this answer will be 57.5
    //if rainFall was under 10 this answer will be 46
}

if (fertilizer === "No" || fertilizer === "no") {
    console.log ("The yield should be", yieldPlusRain, "bushels per acre.")
    //answer will be 40, 45 or 50
}