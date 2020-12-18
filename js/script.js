

let rainFall
let fertilizer = [];
let fertilizerType = [];
let yield = 50;



rainFall = prompt("How many inches of rain fell?", "Please enter a number.");
//rainFall = "*".repeat(rainFall)
console.log(rainFall)

if (rainFall >= 20) {
    console.log(rainFall*.9)
}
if (rainFall < 10) {
    console.log(rainFall*.8)
}

prompt("Did you use fertilizer?", "Yes or No");
    if("Yes" || "yes") {
        prompt("Did you use premium or regular fertilizer?");
    } if("No" || "no") {

    }
    


//var fertilizer = prompt("Did you use fertilizer?", "Yes or No");
//if (fertilizer === "yes") {}


//var fertilizerType = prompt("Did you use premium or regular fertilizer?");