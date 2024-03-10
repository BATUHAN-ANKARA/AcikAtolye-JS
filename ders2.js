// let isim = "Batuhan";
// let yas = 24;
// let sayilar = [1, 2, 3, 4, 5];
// let dogruMu = true;
// let adres = { sokak: "Martı", mahalle: "Dumlupınar", il: "Bursa" };
// console.log("isim değişkeninin tipi:", typeof isim);
// console.log("yas değişkeninin tipi:", typeof yas);
// console.log("sayilar değişkeninin tipi:", typeof sayilar);
// console.log("dogruMu değişkeninin tipi:", typeof dogruMu);
// console.log("adres değişkeninin tipi:", typeof adres);
// console.log("adres.il değişkeninin tipi:", typeof adres.il);
// let sayi1 = 100;
// let sayi2 = 5;

// //toplam
// let toplam = sayi1 + sayi2;
// //çıkartma
// let cikartma = sayi1 - sayi2;
// //carpma
// let carpma = sayi1 * sayi2;
// //bolme
// let bolme = sayi1 / sayi2;
// //mod
// let mod = sayi1 % sayi2;
// //karekok
// let kareKok = sayi1 ** (1/2)

// console.log(toplam, cikartma, carpma, bolme, mod, kare);

//ve operatörü ikisi de true olunca true der
//veya operatörü ikisinden birisi true olursa true der
// let x = true
// let y = false
// let z = true

// console.log("T ve F", x && y);
// console.log("F veya T", y || x);
// console.log(!(x && y));
// console.log(!(x || y));

// let sayi1 = 9;
// let sayi2 = "9";

// console.log(sayi1 == sayi2);
// console.log(sayi1 === sayi2);

let kullanici1 = {
  isim: "Batuhan",
  soyisim: "Ankara",
  yas: 24,
  firma: {
    isim: "Açık Atölye",
    adres: {
      il: "Bursa",
      ilce: "Nilüfer",
    },
  },
  adres: {
    il: "Aydın",
    ilce: "Efeler",
  },
};

// let kullanici2 = {
//   isim: "John",
//   soyisim: "Doe",
//   yas: 32,
//   firma: {
//     isim: "Açık Atölye",
//     adres: {
//       il: "Bursa",
//       ilce: "Yıldırım",
//     },
//   },
//   adres: {
//     il: "İzmir",
//     ilce: "Buca",
//   },
// };

// console.log(kullanici1);
// console.log(kullanici2);

// let firmaSorgusu = kullanici1.firma.isim === kullanici2.firma.isim;
// console.log("Firma ismi sorgusu:", firmaSorgusu);
// let firmaAdresSorgusu = kullanici1.firma.adres === kullanici2.firma.adres;
// console.log("Firma adres sorgusu:", firmaAdresSorgusu);
// console.log(kullanici1.adres.ilce);

// console.log(
//   "Güncelleme öncesi:",
//   kullanici1.isim === kullanici2.isim &&
//     kullanici1.firma.isim === kullanici2.firma.isim
// );
// kullanici1.isim = kullanici2.isim;
// console.log(
//   "Güncelleme sonrası:",
//   kullanici1.isim === kullanici2.isim &&
//     kullanici1.firma.isim === kullanici2.firma.isim
// );
// let sayi1 = 10;
// sayi1 = 6;
// console.log(sayi1);

// const PORT = 6000 || 6001;
// console.log(`Uygulama ${PORT} portunda çalışıyor`);
// console.log(
//   `${kullanici1.isim} isimli kullanıcı, ${kullanici1.firma.isim} isimli firmada çalışıyor, ${kullanici1.firma.isim}'nin adresi şu: ${kullanici1.firma.adres.il}/${kullanici1.firma.adres.ilce}`
// );
