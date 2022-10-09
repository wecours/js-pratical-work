console.log("je suis dans la bonne voie !!!");
console.log("pret à travailler ?");

let phrase = document.getElementById("sms").value;
console.log(phrase);
let long = phrase.length;
console.log(long);

prix = parseInt(long/120);
if (prix <=1) {
    console.log("prix = ", "120 Ariary");
}
else {
    console.log("prix = ", prix*120, " Ariary");
}




// if (long<=120){
//     console.log("nombre de caractères = ", long, " / 120");
//     console.log("prix 120 AR");
//     }
// else if(long<=240) {
//     console.log("nombre de caractères = ", long, " / 240");
//     console.log("prix 240 AR");
// } 
// else {
//     console.log("trouvons d'autres moyens");
// }