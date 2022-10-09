// 8 oct 2022
// Operateur
let x = 2;

// Op numerique
x = x + 3;
x = x - 3;
x = x * 3;
x = x / 3;

x = x % 3;
x = x ** 3;

// Op binaire
x = 5 
// 5 => 00101
// 2 => 00010
x = x << 2 // => 10100 => 20 (2^4+2^2 = 16 + 4 = 20)
x <<= 2

x = 5      // 00101
x = x >> 2 // 00001 => 1
x >>= 2

x = 7       // 00111
x = x & 3   // 00011        : Bit ET
            // 00011 => 3
x &= 3

x = 8       // 01000
x = x | 3   // 00011
            // 01011 => 11
x |= 3

x = 9       // 01001
x = x ^ 3   // 00011
            // 11010
x ^= 3


/// Priorité
// Principle : 
// * et / plus prioritaire que + et -
let y = 4
x = ((3 / y) * x) + 2
x = (3 / y) * (x + 2)

x = 2 + 4 + "test";
// x = 6 + "test"
// x = "6test"
console.log(x)

x = "test" + 6 + 1;
// x = "test" + 7 => "test7" 
// x = "test61"
console.log(x)

x = "test" + (6 + 1);
console.log(x)