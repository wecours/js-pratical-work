// Fonction
// "use strict"

// Signature
// nom + parametre(s) + Retour
// Interet : Possibilité de reutiliser un bout de code
// Approche fonctionelle, na proceduralle

// Déclaration  : function cube(params) {}
// Appel        : cube(6);

// Syntaxe 1 : 
// ===========
function fct(){
    // Instruction 1
    // Instruction 2
    // Instruction 3
    // Instruction ....
}

function fct1(pUn, pDeux){
    // Instruction 1
    // Instruction 2
    // Instruction 3
    // Instruction ....
    return valeur
}

// Exemple 1 : Addiction de deux nombre
function addition(a, b){
    return a + b;
}

const c = addition(2, 3)
console.log( "c :", c ) // 5

// Exemple 2 : Determiation Grade via Note

/**
 * Declaration du fonction "determinerGrade"
 * @param {*} note 
 * @returns 
 */
function determinerGrade(note){
    let grade = undefined
    switch(true){
        case note <= 50 : 
            grade = "F"
            break;
        case note <= 60 : 
            grade = "E"
            break;
        case note <= 70 : 
            grade = "D"
            break;
        case note <= 80 : 
            grade = "C"
            break;
        case note <= 90 : 
            grade = "B"
            break;
        case note <= 100 : 
            grade = "A"
            break;
        default:
            grade = `Note invalide,
            Verifier votre note : ${note}`
    }
    return grade;
}
let note = parseInt(Math.random()*120)
// Appel du fonction "determinerGrade"
const grade = determinerGrade(note)
console.log(`Note : ${note}, Grade : ${grade}`)


// Exemple 3 : Equation second degrer
function projectil(x){
    return 2*(x**2) - 8*x + 13
}
console.log( `projectil(${note}) = ${projectil(note)}` )

// Exemple 4 : getMeteo()
// function getMeteo(){
//     const temperature = fournisseur.getTemperature();
//     const vitesseWind = fournisseur.getWindRate()
//     return {
//         temperature: temperature,
//         vitesseWind: vitesseWind,
//         predition : fct(temperature, vitesseWind)
//     }
// }

// Exemple 5 : cleanChaineDeCaractere
function cleanChaineDeCaractere(chaine){
    const result = chaine;
    // Esorina espace indesirable
    // avadika minscule
    // avadika ho "-"" ny " "
    // Dia mahazo slug
    return result;
}

// Syntaxe 2 :
const valeurAbs = function valeurAbsolu(nombreEntier){
    // Instruction
}

// valeurAbsolu(-5);
valeurAbs(9)

// Syntaxe 3 : Fonction annonyme
var inverseNombre = function (nombre){
    // Instruction
}

// inverseNombre(78)

// Syntaxe 4 : Appel direct function annonyme
// (function (parametres){
//     // Instruction 1
//     // Instruction 2
// })(567567)

// Sytaxe 5 : Fonction fleche
const cube = (nombre) => {
    // Instruction 1
}

const valeurCube = cube(4)

// this

// Fonction imbriquer : cas 1
function additionNombreComplexe(nbReelA, nbImagA, nbReelB, nbImagB){
    function addNbReel(nbReelA, nbReelB){
        return nbReelA + nbReelB
    }
    function addNbImage(nbImagA, nbImagB){
        return nbImagA + nbImagB
    }

    const sommReel = addNbReel(nbReelA, nbReelB)
    const sommImage = addNbImage(nbImagA, nbImagB)
    
    return {r: sommReel, i: sommImage}
}

// Fonction imbriquer : cas 2
function additionNombreComplexe(nbReelA, nbImagA, nbReelB, nbImagB){
    const addNbReel = (nbReelA, nbReelB) => { // Declaration addNbReel
        return nbReelA + nbReelB
    }
    const addNbImage = (nbImagA, nbImagB) => { // Declaration addNbImage
        return nbImagA + nbImagB
    }

    const sommReel = addNbReel(nbReelA, nbReelB) // Appel addNbReel
    const sommImage = addNbImage(nbImagA, nbImagB) // Appel addNbImage
    
    return {r: sommReel, i: sommImage}
}

// Fonction imbriquer : cas 3
function additionNombreComplexe(nbReelA, nbImagA, nbReelB, nbImagB){
    const addNbReel = (nbReelA, nbReelB) => nbReelA + nbReelB
    const addNbImage = (nbImagA, nbImagB) => nbImagA + nbImagB

    const sommReel = addNbReel(nbReelA, nbReelB) // Appel addNbReel
    const sommImage = addNbImage(nbImagA, nbImagB) // Appel addNbImage
    
    return {r: sommReel, i: sommImage}
}

// Fonction imbriquer : cas 4
function fct1(params){ // Declaration
    function fct2(){ // Declaration
        return 678678;
    }
    return fct2; // Mandefa ny vatan'i fonction fct2
}

const ret = fct1(22323); // Appel ftc1
// ret => vatan'ny function ret2
// ret => 678678
// ret => 678678 fct2

const r = ret() // Appel ret
// r => 678678




// Function : Recursive
// Fonction qui s'auto-Appel

function dormir(heure){
    dormir(heure)
    // let heure = 21
    // Instruction possible manova ny variable heure
    if(heure < 6){
        heure = heure + 1;
        dormir(heure); // Appel de lui-même
    }else{
        mifoha(heure);
    }
}


// Fonction generateur

function* distribuerDominoChinoi(){
    const fotsyFotsy = "fotsyFotsy"
    const fotsyRay = "fotsyRay"
    const fotsyRoa = "fotsyRoa"
    const vatoSasany1 = "vatoSasany1"
    const vatoSasany2 = "vatoSasany2"
    const vatoSasany3 = "vatoSasany3"
    const vatoSasany4 = "vatoSasany4"
    const vatoSasany5 = "vatoSasany5"
    const vatoSasany6 = "vatoSasany6"
    const vatoSasany7 = "vatoSasany7"

    yield fotsyFotsy
    yield fotsyRay
    yield fotsyRoa
    yield vatoSasany1
    yield vatoSasany2
    yield vatoSasany3
    yield vatoSasany4
    yield vatoSasany5
    yield vatoSasany6
    yield vatoSasany7
}

const vatoAmbonyLatabatra = distribuerDominoChinoi();

const btnMakaVato = document.getElementById("btnMakaVato");
let isa = 1;
btnMakaVato.onclick = (event) => {
    console.log(`DistribuerDominoChinoi ${isa} : ${vatoAmbonyLatabatra.next().value}`)
    isa = isa + 1;
}