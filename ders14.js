// const axios = require("axios");

// axios.get("https://dummyjson.com/users").then((res) => {
//     console.log(res.data);
// })

let sayilar = [];
let asalSayilar = [];
let randomSayi = 0;
let asalOlmayanSayilar = [];

for (let index = 0; index < 100; index++) {
  randomSayi = Math.floor(Math.random() * 200) + 1;
  sayilar.push(randomSayi);
}

function asalKontrol(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
const asalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    for (let index = 0; index < sayilar.length; index++) {
      if (
        asalKontrol(sayilar[index]) &&
        !asalSayilar.includes(sayilar[index])
      ) {
        asalSayilar.push(sayilar[index]);
      }
      if (
        !asalOlmayanSayilar.includes(sayilar[index]) &&
        !asalKontrol(sayilar[index])
      ) {
        asalOlmayanSayilar.push(sayilar[index]);
      }
    }
    resolve({
      asalSayilar: asalSayilar,
      asalOlmayanSayilar: asalOlmayanSayilar,
    });
  }, 1000);
});

asalPromise
  .then((res) => {
    console.log(res.asalSayilar);
    console.log("===>", res.asalOlmayanSayilar);
  })
  .catch((err) => {
    console.log(err);
  });
