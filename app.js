const mymodule = require("./functions");

try {
  let toplamSonuc = mymodule.toplama(9, 9);
  console.log("Toplama işlemi:", toplamSonuc);
  let cikartmaSonuc = mymodule.cikartma(9, 9);
  console.log("Çıkartma işlemi:", cikartmaSonuc);
  let carpmaSonuc = mymodule.carpma(9, 9);
  console.log("Çarpma işlemi:", carpmaSonuc);
  let bolmeSonuc = mymodule.bolme(9, 0);
  console.log("Bölme işlemi:", bolmeSonuc);
  let faktoriyelSonuc = mymodule.faktoriyel(9);
  console.log("Faktöriyel işlemi:", faktoriyelSonuc);
  let modSonuc = mymodule.mod(9, 9);
  console.log("Mod işlemi:", modSonuc);
  let kuvvetSonuc = mymodule.kuvvet(9, 9);
  console.log("Kuvvet işlemi:", kuvvetSonuc);
} catch (error) {
  console.log("Bir hata oluştu!!!", error.message, new Date());
}
