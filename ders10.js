// let randomSayi = null;
// for (let index = 0; index >= 0; index++) {
//   randomSayi = Math.floor(Math.random() * 11);
//   console.log(randomSayi);
//   if (randomSayi === 10) {
//     console.log(index + 1, ".cı döngüde kırıldı");
//     break;
//   }
// }
// let sayi = Math.floor(Math.random() * 11);
// const ciftSayi = (a) => {
//   console.log("bu bir çift sayıdır", a);
// };
// const tekSayi = (a) => {
//   console.log("bu bir tek sayıdır", a);
// };
// sayi % 2 === 0 ? ciftSayi(sayi) : tekSayi(sayi);

// const toplama = (sayi1, sayi2, cb) => {
//     // console.log("Sonuç: ", sayi1 + sayi2);
//     cb(sayi1 + sayi2)
// }

// const ekranayazdir = (x) => {
//     console.log(x);
// }

// toplama(7, 7, ekranayazdir)

// const displayErrors = (err) => {
//   console.log("Hata oluştu", err, "Tarih:", new Date());
// };

// const displayResponse = (res) => {
//   console.log("Cevap oluştu", res, "Tarih:", new Date());
// };

// function bolme(a, b, errorHandler, responseHandler) {
//   if (b === 0) {
//     errorHandler("Bölen sayı sıfır olamaz!")
//   } else {
//     responseHandler(a / b)
//   }
// }

// bolme(10, 0, displayErrors, displayResponse)

let suan = new Date()
let saat = new Date().getHours()

console.log(suan);
console.log(saat);