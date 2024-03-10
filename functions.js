// function toplama(sayi1, sayi2) {
//   console.log(sayi1 + sayi2);
// }

// toplama(9, 8);

// function bolme(sayi1, sayi2) {
//   if (sayi2 === 0) {
//     throw new Error("Bölen sayı sıfır olamaz!");
//   } else {
//     console.log(sayi1 / sayi2);
//   }
// }

// bolme(10, 1);

// function faktoriyel(sayi) {
//   if (sayi === 0 || sayi === 1) {
//     return 1;
//   } else {
//     return sayi * faktoriyel(sayi - 1);
//   }
// }

// console.log(faktoriyel(4));

// const toplama = function (sayi1, sayi2) {
//   return sayi1 + sayi2;
// };

// console.log(toplama(10, 10));

// const carpma = (sayi1, sayi2) => {
//   return sayi1 * sayi2;
// };

// console.log(carpma(8, 8));

// const kullanicilarModule = require("./kullanicilar");

// for (let index = 0; index < kullanicilarModule.kullanicilar.length; index++) {
//   console.log(kullanicilarModule.kullanicilar[index].name);
//   console.log(kullanicilarModule.kullanicilar[index].email);
// }

const toplama = (a, b) => {
  return a + b;
};

const cikartma = (a, b) => {
  return a - b;
};

const carpma = (a, b) => {
  return a * b;
};

const bolme = (a, b) => {
  if (b === 0) {
    throw new Error("Bölen sayı sıfır olamaz!");
  } else {
    return a / b;
  }
};

const faktoriyel = (a) => {
  let carpim = 1;
  for (let index = 1; index <= a; index++) {
    carpim = carpim * index;
  }
  return carpim;
};

const mod = (a, b) => {
  return a % b;
};

const kuvvet = (a, b) => {
  return a ** b;
};

module.exports = {
  toplama,
  cikartma,
  carpma,
  bolme,
  faktoriyel,
  mod,
  kuvvet,
};
