// let isim = "batuhan"; //string tipinde veri
// console.log(isim); //ekrana yazdırmak için
// console.log("isim güncelleniyor");
// isim = "Taha"; //güncelleme yapıyor
// console.log(isim);
// let yas = 24; //number tipinde veri
// console.log("Adım", isim, "yaşım", yas);
// yas = 25;
// console.log("Adım", isim, "yaşım", yas);
// let vizeNotları = [85, 90, 32, 45, 76, 78, 87, 66];
// console.log(vizeNotları);
// let kullanici = { //obje tipinde veri
//   isim: "Batuhan",
//   soyisim: "Ankara",
//   adres: {
//     il: "Bursa",
//     ilce: "Nilüfer",
//   },
// };

// console.log(kullanici.isim);
// console.log(kullanici.adres.il);

// let ad = "Batuhan"
// let yas = 24
// console.log("Merhaba", ad);
// ad = "Ali"
// console.log("Merhaba", ad, yas);
// yas = 23
// console.log("Yaş güncellendi", yas)

// let sayi1 = 15;
// let sayi2 = 15;

// console.log(sayi1 + sayi2);
// console.log(typeof sayi1);
// sayi1 = String(sayi1);
// console.log(sayi1 + sayi2);
// console.log(typeof sayi1);

// let dizi = ["Zeynep", "Su", "Mehmet", "Batuhan"]
// console.log(dizi[dizi.length - 1]);
// let uzunluk = dizi.length

// let kullanici1 = {
//   isim: "Batuhan",
//   firma: "Açık Atölye",
//   yas: 24,
//   adres: {
//     il: "Bursa",
//     ilce: "Nilüfer",
//     mahalle: "Dumlupınar",
//   },
//   favoriRenkler: ["mavi", "mor", "gri", "siyah"],
// };

// let kullanici2 = {
//   isim: "Mehmet",
//   firma: "Simya Lisesi",
//   yas: 17,
//   adres: {
//     il: "Bursa",
//     ilce: "Nilüfer",
//     mahalle: "Dumlupınar",
//   },
//   favoriRenkler: ["mavi", "mor", "gri", "siyah"],
// };

//console.log(kullanici2.firma);

// let kullanicilar = [kullanici1, kullanici2];
// console.log(kullanicilar[0].adres.mahalle);
// console.log(kullanicilar[0].favoriRenkler[3]);

// let yas = 18;
// let puan = 73;
// let isim = "Batuhan";

// if (yas >= 18) {
//   console.log("Ehliyet alabilirsin");
// } else {
//   console.log("Ehliyet alamazsın");
// }

// if (puan >= 90) {
//   console.log("Notunuz AA");
// } else if (puan >= 80) {
//   console.log("Notunuz BB");
// } else if (puan >= 70) {
//   console.log("Notunuz CC");
// } else if (puan >= 60) {
//   console.log("Notunuz DD");
// } else {
//   console.log("Notunuz FF");
// }

// if (isim === "Mehmet" || puan >= 70) {
//     if (yas >= 18) {
//         console.log("Ehliyet al");
//     } else {
//         console.log("Ehliyet alamazsın");
//     }
// } else {
//     console.log("hiçbirt şart sağlanmadı");
// }

// for (let index = 0; index >= 0; index++) {
//   console.log("merhaba batu", index);
// }

let toplam = 0;

// for (let index = 1; index <= 10; index++) {
//     toplam = toplam + index
// }
// console.log(toplam);

// let i = 1
// while (i <= 10) {
//     toplam = toplam + i
//     i++
// }
// console.log(toplam);

// let dizi = ["elma", "karpuz", "çilek", "kivi"]

// for (let index = 0; index < dizi.length; index++) {
//     console.log(dizi[index]);
// }

// let carpim = 1
// let n = 1
// for (let index = 1; index <= n; index++) {
//     carpim = carpim * index
// }
// console.log(carpim);

// let kullanicilar = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];

// for (let index = 0; index < kullanicilar.length; index++) {
//   console.log(kullanicilar[index].address);
// }

let dizi1 = [1, 2, 3, 4];
let dizi2 = [9, 8, 7, 6, 8, 8];
let dizi3 = [5, 4, 3, 2];
let dizi4 = [0, 9, 8, 7];

for (let index = 0; index < dizi1.length; index++) {
    console.log(dizi1[index]);
}

for (let index = 0; index < dizi2.length; index++) {
    console.log(dizi2[index]);
}

for (let index = 0; index < dizi3.length; index++) {
    console.log(dizi3[index]);
}

for (let index = 0; index < dizi4.length; index++) {
    console.log(dizi4[index]);
}
