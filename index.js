// Iteration 1: Names and Input

let hacker1,hacker2; 
hacker1 = "Valeria";
hacker2 = "Oscar"

console.log(`The driver's name is ${hacker1}`);
console.log(`The navegator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}


// Iteration 3: Loops

let nombreMayuscula = '';
for (let i = 0; i < hacker1.length; i++) {
    let letra = hacker1[i]; 
    let letraMayuscula = letra.toUpperCase()
    let letraSeparadas = `${letraMayuscula} `
    nombreMayuscula += letraSeparadas 
}
console.log(nombreMayuscula);

let nombreReves ='';
 for (let i = hacker2.length - 1; i >= 0; i--){
    nombreReves += hacker2[i];
}
console.log(nombreReves);


let hacker1Mayuscula = hacker1[0].toUpperCase()
let hacker2Mayuscula = hacker2[0].toUpperCase()
if (hacker1Mayuscula < hacker2Mayuscula ) {
    console.log(`The driver's name goes first.`)
}
else if (hacker2Mayuscula < hacker1Mayuscula) {
    console.log(`Yo, the navegator goes first, definitely.`)
}
else (console.log("What?! You both have the same name?"))
