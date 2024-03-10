// // Palindrom, hem sağ taraftan hem de sol taraftan okunduğunda aynı olan kelime veya kelime gruplarıdır.
// // Örneğin mum, ada, yapay, kazak, küçük, neden, niçin gibi kelimelerle “ey edip adanada pide ye”.
// // Bir dizi sayı ve kelimenin plaindrom olanlarının ekrana yazdırıldığı program.

// let kelimeler = [
//   "YAPAY",
//   "KAZAK",
//   "BARDAK",
//   "NEDEN",
//   "NICIN",
//   "KUCUK",
//   "KEK",
//   "KUTU",
//   "MEYVE",
//   "MASA",
//   "KITAP",
//   "ADA",
//   "MUM",
//   "LIMON",
// ];
// let sayilar = [101, 205, 18, 66, 93, 404, 342, 186, 515, 27, 24, 22, 336, 262];

// let temp = []
// let temp2 = []
// let palindromKelimeler = []
// let yeniKelimeler = []
// let palindromSayilar = []
// let yeniSayilar = []

// for (let index = 0; index < kelimeler.length; index++) {
//     const element = kelimeler[index];
//     temp = element.split("")
//     let x = temp.join("")
//     let xR = temp.reverse().join("")
//     if (x === xR) {
//         palindromKelimeler.push(x)
//     } else {
//         yeniKelimeler.push(x)
//     }
// }

// for (let index = 0; index < sayilar.length; index++) {
//     const element = sayilar[index];
//     temp2 = element.toString().split("")
//     let y = temp2.join("")
//     let yR = temp2.reverse().join("")
//     if (y === yR) {
//         palindromSayilar.push(y)
//     } else {
//         yeniSayilar.push(y)
//     }
// }

// // console.log(yeniKelimeler);
// console.log(yeniSayilar);
// console.log(palindromSayilar);

// function toplama(sayi1, sayi2) {
//     return sayi1 + sayi2
// }

// function toplama2(a, b) {
//     console.log(a + b);
// }

// toplama2(8,8)

let toplama = (sayi1, sayi2) => {
  console.log(sayi1 + sayi2);
};

toplama(4, 5);
