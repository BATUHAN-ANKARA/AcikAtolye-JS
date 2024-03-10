const mathModule = require("./math");

let sayi1 = 9;
let sayi2 = 0;
let toplamSonucu = mathModule.toplama(sayi1, sayi2);
let carpmaSonucu = mathModule.carpma(sayi1, sayi2);
let cikartmaSonucu = mathModule.cikartma(sayi1, sayi2);
let bolmeSonucu = mathModule.bolme(sayi1, sayi2);
let modSonucu = mathModule.mod(sayi1, sayi2);

console.log(toplamSonucu, carpmaSonucu, cikartmaSonucu, bolmeSonucu, modSonucu);
