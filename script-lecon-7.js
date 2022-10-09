// 8 oct 2022
// Consideration true : Truthy

let nb = 45
let nbi = false
// console.log("true", true)
// console.log("45", nb)

// nb = "0"
// nb = "false"
// nb = -5
// nb = {}
// nb = -Infinity

if((89 || nb) && (nbi == false)){ // true
    console.log(`Ok, ${nb} est considere comme true`)
}

// Consideration false : Falsy
// let nbf = false
// let nbf = 0
// let nbf = -0
// let nbf = ""
// let nbf = null
// let nbf = undefined
let nbf = NaN

if(nbf){
    console.log("Ne serai jamais executé")
}else{
    console.log(`Ok else, ${nbf} considerer comme false`)
}