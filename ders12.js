// function selamla(isim) {
//     console.log("Selamlama fonksiyonu başladı");
//     setTimeout(() => {
//         console.log(`Merhaba ${isim}`);
//     }, 3500)

//     console.log("İşlem tamamlandı");
// }

// selamla("Taha")

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("İlk promise örneği");
//   }, 2000);
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Her durumda çalışan blok");
//   })

// console.log("ahjvfjhdfj");

// const soz = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject(randomNumber);
//     }
//   }, 1500);
// });

// soz
//   .then((res) => {
//     console.log("İşlem başarılı", res);
//   })
//   .catch((err) => {
//     console.log("İşlem başarısız", err);
//   })
//   .finally(() => {
//     console.log("Her durumda çalışan blok");
//   });

const bolme = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject("Bölen sayı sıfır olamaz!");
      } else {
        resolve(a / b);
      }
    }, 2000);
  });
};

bolme(9, 0)
  .then((result) => {
    console.log("İşlem  başarılı", result);
  })
  .catch((error) => {
    console.log("İşlem başarısız", error);
  });
