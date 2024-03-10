// //function declaration
// function faktoriyel1(sayi) {
//   let carpim = 1;
//   for (let index = 1; index <= sayi; index++) {
//     carpim = carpim * index;
//   }
//   return carpim;
// }

// //function expression(arrow)
// const faktoriyel2 = (sayi) => {
//   if (sayi < 0) {
//     throw new Error("Sayı sıfırdan küçük olamaz!");
//   } else {
//     let carpim = 1;
//     for (let index = 1; index <= sayi; index++) {
//       carpim = carpim * index;
//     }
//     return carpim;
//   }
// };

// //function expression
// const faktoriyel = function (sayi) {
//   if (sayi < 0) {
//     throw new Error("Sayı sıfırdan küçük olamaz!");
//   } else {
//     let carpim = 1;
//     for (let index = 1; index <= sayi; index++) {
//       carpim = carpim * index;
//     }
//     return carpim;
//   }
// };

// try {
//   let sonuc = faktoriyel2(-5);
//   console.log("Hata oluşmadı", sonuc);
// } catch (error) {
//   console.log("Hata oluştu:", error.message);
// } finally {
//   console.log("Faktoriyel2 fonksiyonu çalıştı");
// }

// try {
//   let sonuc = faktoriyel(4);
//   console.log("Hata oluşmadı", sonuc);
// } catch (error) {
//   console.log("Hata oluştu:", error.message);
// } finally {
//   console.log("Faktoriyel fonksiyonu çalıştı");
// }

//toplama, çıkartma, bölme, çarpma, faktöriyel

const islemlerModule = require("./islemler");
const kullanicilar = require("./kullanicilar")
const diziGezModule = require("./diziGez")

let islemTuru = "faktoriyel";

try {
  if (islemTuru === "toplama") {
    console.log(islemlerModule.toplama(8, 2));
  } else if (islemTuru === "cikartma") {
    console.log(islemlerModule.cikartma(9, -3));
  } else if (islemTuru === "carpma") {
    console.log(islemlerModule.carpma(9, -3));
  } else if (islemTuru === "bolme") {
    console.log(islemlerModule.bolme(9, -3));
  } else if (islemTuru === "faktoriyel") {
    console.log(islemlerModule.faktoriyel(-9));
  }
} catch (error) {
  console.log(error.message);
}

diziGezModule.diziGez(kullanicilar.kullanicilar)