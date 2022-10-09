// 8 oct 2022
// Type et Conversion type

let ns = "5";
// let ns = fct(); // => "5"

// Option 1 condition
if(typeof ns == "number"){ // false
    if(ns >= 5){
        console.log("Ok, option 1")
    }
}

// Option 2 conversion 1
if(parseInt(ns) >= 5){
    console.log("Ok, option 2")
}

// Option 3 conversion 2
if(Number(ns) >= 5){
    console.log("Ok, option 3")
}

let nsn = "5.6"
let nf = parseFloat(nsn)
console.log(nf)

let sf = String(nf)
console.log("sf :", sf)
console.log("nf :", nf, nf.toString())

// Type
null, undefined
// Nombre
NaN, Infinity, -Infinity

nb = "5"
if(isNaN(nb)){ // false
    console.log("Ok, isNaN(nb)")
}

// const fdffsf = fct() // ""
// const fdffsf = ""
// const fdffsf = "0"
// const fdffsf = false
// const fdffsf = true
// const fdffsf = NaN
// const fdffsf = []
const fdffsf = undefined
console.log(Number(fdffsf))

// == => valeur (non typer)
// === => valeur + type
if( "10" == 10 ){}