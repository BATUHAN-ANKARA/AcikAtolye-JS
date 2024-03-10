const selamlaModul = require("./selamlama");
const matematikModul = require("./matematik");
const ucgenModul = require("./ucgen");
const daireModul = require("./daire");
const kdvModul = require("./kdv");

let sayi1 = 7;
let sayi2 = 5;
let fiyat = 560;

try {
  console.log(selamlaModul.gunaydin("Batuhan"));
  console.log(matematikModul.mutlak(sayi1), "Mutlak değer");
  console.log(ucgenModul.dikUcgenCevre(sayi1, sayi2), "Dik üçgen çevre");
  console.log(daireModul.alan(sayi1), "Daire alan");
  console.log(kdvModul.tip2(fiyat), "KDV fiyat");
} catch (error) {
  console.log("Hata oluştu:", error.message);
}

//setTimeOut