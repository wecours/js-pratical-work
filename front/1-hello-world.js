console.log("Hello, world");
console.warn("Alert, world");
console.error("World, climat harm");

const pi = 3.141592;
const n = 2e-2;
let nom = "Koto"
const c = "initial value";
let isChecked = false;
let personne = null;
let voiture;
// window, document
// window.nom = "Luc Hervé"

const somme = pi + n;
const produit = pi * n;
const sub = pi - n;
const div = pi / n
const mod = n % 2; 
// 10 % 2 => 0
// 9 % 2 => 1


(() => {
    nom = "Tsy koto"
})()


// nom = undefined;
// delete nom;
// delete window.nom;

console.log(
    "nom : ", nom,
    "pi : ", pi, 
    "personne : ", personne, 
    "voiture : ", voiture,
    "Test : ", undefined == null,
    // "window.nom : ", window.nom,
    // "window.largeur : ", window.innerWidth,
    "2e2 : ", n
)

let b = 10
console.log("b : ", b++ )
console.log("b : ", b)

// b *= 2

let h = 11
let g = "11"

console.log( g == h )
console.log( g === h )