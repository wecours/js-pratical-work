// Tableau 

// Cas 1 :
let tableau1 = ["Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "huit"]
console.log(tableau1.length)

// Cas 2 :
const tableau2 = ["Un", 
    "Deux", "Trois", "Quatre", 
    "Cinq", "Six", "Sept", "huit",
    56,
    {p1: 4},
    () => 5
]
console.log("tableau1.length", tableau1.length)

// |================|
// | Indice| Valeur |
// |================|
// | 0     | Un     |
// |----------------|
// | 1     | Deux   |
// |----------------|
// | 2     | Trois  |
// |----------------|
// | 3     | Quatre |
// |----------------|
// | 4     | Cinq   |
// |----------------|
// | 5     | Six    |
// |----------------|
// | 6     | Sept   |
// |----------------|
// | 7     | Huit   |
// |----------------|


// Cas 3 :
const tableau3 = ["Un", 
    "Deux", "Trois", "Quatre", 
    "Cinq", "Six", "Sept", "huit",
    56,
    {p1: 4},
    () => 5
]
console.log("tableau1[3]", tableau1[3]) // Acceder au valeur


// Operation tableau
// console.log("tableau1 : ", tableau1)
tableau1.push("Neuf")
console.log("tableau1 : ", tableau1)
// Recuperer et supprimer le dernier
// console.log("tableau1 : ", tableau1.pop(), tableau1)

// tableau1 = tableau1.slice(1)
// console.log("tableau1 : ", tableau1)

// tableau1 = tableau1.slice(3)
// console.log("tableau1 : ", tableau1)

// Couper
// tableau1 = tableau1.slice(3, 5)
// console.log("tableau1 : ", tableau1)

// Suppression
// tableau1.splice(3, 2)
// console.log("tableau1 : ", tableau1)
// let tableau1Bis = ["Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "huit"]

// tableau1Bis.shift()
// console.log("tableau1 : ", tableau1Bis)

// Merging plusieur tableau
// let arr1 = ["ray", "roa"]
// let arr2 = ["telo", "efatra"]
// // console.log("77", arr1, ...arr1)
// const arr3 = [ ...arr1, ...arr2 ]
// console.log("77", arr3)

// const arr4 = arr1.concat(arr2)
// console.log("arr4", arr4)

// Platena ho chaine de caractere ny array
// console.log("82", arr3.join(" | "))


// Sort
// console.log("Sorting", 
//     [8, 5, 19, 7, -3, 567]
//     .sort((a, b) => parseInt(a) < parseInt(b) ? a : b)
// )

// Mappage
// let arrNb1 = [2, 3, 4, 5]
// arrNb1 = arrNb1.map((v) => v * 2)
// tableau1 = arrNb1.map((v) => `${v}_`)
// console.log("97", arrNb1, tableau1)

// Reduction
let arrNb2 = [2, 3, 4, 5]
function somme(resultat, v){
    console.log(resultat, v)
    return resultat + v
}
const resultSomme = 
    arrNb2.reduce(somme);
console.log("102", resultSomme)