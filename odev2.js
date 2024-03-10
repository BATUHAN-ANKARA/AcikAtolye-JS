// let vizeNotlari = []; //30 öğrencinin vize notları
// let finalNotlari = []; //30 öğrencinin final notları
// let ogrenciNot = []; //30 öğrencinin vize notunun %40 ile final notunun %60ını topla
// let harfNotlari = []; //30 öğrencinin harf notları
// let vizeOrt; //Sınıfın vize notu ortalaması
// let finalOrt; //Sınıfın final ortalaması
// let sinifOrt; //sınıf vize ortalamasının %40ı ile sınıf final ortalamasının %60ı(çan eğrisi)
// let toplamVize = 0; //vize notu toplamını bulmak için başlangıç değeri
// let toplamFinal = 0; //final notu toplamını bulmak için başlangıç değeri
// let sayacAA = 0;
// let sayacCC = 0;
// let sayacDC = 0;
// let sayacFF = 0;
// let sayaclar = [];

// for (let i = 0; i < 30; i++) {
//   vizeNotlari.push(Math.floor(Math.random() * 101)); //0 ile 100 aralığında rastgele sayı üretip vize notlarına ekleme
//   finalNotlari.push(Math.floor(Math.random() * 101)); //0 ile 100 aralığında rastgele sayı üretip final notlarına ekleme
// }

// for (let index = 0; index < vizeNotlari.length; index++) {
//   toplamVize += vizeNotlari[index]; //tüm vize notlarını toplayıp toplamVize değişkenine aktarıyor
// }

// for (let index = 0; index < finalNotlari.length; index++) {
//   toplamFinal += finalNotlari[index]; //tüm final notlarını toplayıp toplamFinal değişkenine aktarıyor
// }

// for (let index = 0; index < vizeNotlari.length; index++) {
//   ogrenciNot.push(vizeNotlari[index] * 0.4 + finalNotlari[index] * 0.6);
// }

// vizeOrt = toplamVize / vizeNotlari.length; //vize notları toplamını öğrenci sayısına böl = sınıfın ortalama vize notu
// finalOrt = toplamFinal / finalNotlari.length; //final notları toplamını öğrenci sayısına böl = sınıfın ortalama final notu

// sinifOrt = vizeOrt * 0.4 + finalOrt * 0.6; //sınıfın çan eğrisi = vize ortlamasının %40ı + final ortalamasının %60ı

// for (let index = 0; index < ogrenciNot.length; index++) {
//   if (finalNotlari[index] < 35) {
//     console.log(`${index} nolu öğrenci`, "FF aldın ve kaldın :(");
//     harfNotlari.push("FF");
//     sayacFF++;
//   } else if (
//     ogrenciNot[index] <= sinifOrt + 5 &&
//     ogrenciNot[index] >= sinifOrt - 10
//   ) {
//     console.log(`${index} nolu öğrenci`, "CC aldın ve geçtin :)");
//     harfNotlari.push("CC");
//     sayacCC++;
//   } else if (ogrenciNot[index] > sinifOrt + 5) {
//     console.log(`${index} nolu öğrenci`, "AA aldın ve geçtin :D");
//     harfNotlari.push("AA");
//     sayacAA++;
//   } else if (ogrenciNot[index] < sinifOrt && finalNotlari[index] >= 35) {
//     console.log(`${index} nolu öğrenci`, "DC aldın ve geçtin :|");
//     harfNotlari.push("DC");
//     sayacDC++;
//   } else {
//     console.log("vize notu:", vizeNotlari[index]);
//     console.log("final notu:", finalNotlari[index]);
//     console.log("sınıf notu:", sinifOrt[index]);
//     console.log("öğrenci notu:", ogrenciNot[index]);
//   }
// }
// console.log("--------------------");
// console.log(harfNotlari);
// console.log("--------------------");
// console.log("AA", sayacAA, "CC", sayacCC, "DC", sayacDC, "FF", sayacFF);
// sayaclar.push(sayacAA, sayacCC, sayacDC, sayacFF);
// sayaclar.sort((a, b) => a - b);
// sayaclar = sayaclar.reverse();
// if (
//   sayacFF >= harfNotlari.length / 3 &&
//   sayacFF === sayaclar[0]
// ) {
//   console.log("--------------------");
//   console.log("Ders başarımı çok kötü");
//   console.log("FF alanların sayısı:", sayacFF);
// } else if (
//   sayacAA >= harfNotlari.length / 3 &&
//   sayacAA === sayaclar[0]
// ) {
//   console.log("--------------------");
//   console.log("Ders başarımı çok iyi");
//   console.log("AA alanların sayısı:", sayacAA);
// } else if (
//   sayacCC >= harfNotlari.length / 3 &&
//   sayacCC === sayaclar[0]
// ) {
//   console.log("--------------------");
//   console.log("Ders başarımı orta");
//   console.log("CC alanların sayısı:", sayacCC);
// } else if (
//   sayacDC >= harfNotlari.length / 3 &&
//   sayacDC === sayaclar[0]
// ) {
//   console.log("--------------------");
//   console.log("Ders başarımı kötü");
//   console.log("DC alanların sayısı:", sayacDC);
// }