// 8 oct 2022
// Chaine de caractere

let s1 = "Lorem";
let s2 = `Lorem`;
let s3 = `Lorem`; // Chaine de caratere literal
let i = 3; // 00011

s1 = s1 + " l'ipsum"
s1 = s1 + ' l\'ipsum'

s2 = s2 + " lipsum" // <=
s3 = `${s3} lipsum ${i << 1}` // <= 00110 => 6
s3 = `${s3} lipsum ${i ** 2}` // <= 9
s3 = `${s3} lipsum ${i == 2}` // <= false
s3 = `${s3} lipsum ${i = 2}` // <= 2

console.log("s1", s1)
console.log("s2", s2)
console.log("s3", s3)