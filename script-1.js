// Block 1
// 7 oct 2022
console.log("Hello World JS");

var age = 54;
let nom;
nom = "Koto"; // Exemple Reassignation

const NOM2 = "Koto";

// Exemple changement valeur variable
const t = {p1: 2};
t.p1 = 3;

// Block 1
if(nom == "Koto"){
    // Block 2

    let description = "exemple";

    // console.log("age : ", age);
    console.log("nom : ", nom, "description : ", description); //OK
    // nom = "Kotonirina";
    // console.log("nom : ", nom);
    // let nom = "Nary";
    // console.log("nom : ", nom);

    if(nom == "Koto"){
        // Block 2-1
        var cron = "daily";
        test = "test";
        console.log("description : ", description) // OK
    }
    // Block 2
    console.log("34:cron : ", cron, test) // => daily
    cron = "weekly";
    console.log("36:cron : ", cron, test); // => weekly
    // Block 2
}
// Block 1
console.log("40:cron : ", cron, test); // => weekly
// console.log("description : ", description);

if(NOM2 == "Koto"){
    // Block 3
    // console.log("description : ", description);
}

// Block 1
