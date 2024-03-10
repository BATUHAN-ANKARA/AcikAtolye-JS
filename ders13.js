// let sayi = 123;
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (sayi % 2 === 0) {
//       resolve("Sayı çift");
//     } else if (sayi % 3 === 0) {
//       resolve("Sayı üçe bölünür");
//     } else {
//       reject("2nin veya 3ün katı değildir");
//     }
//   }, 2500);
// });

// myPromise
//   .then((sonuc) => {
//     console.log(sonuc);
//   })
//   .catch((hata) => {
//     console.log(hata);
//   });

const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    for (let index = 0; index < res.data.length; index++) {
      console.log(res.data[index].name);
    }
  })
  .catch((err) => {
    console.log("Hata oluştu", err);
  });
