let vizeNotlari = [];
let finalNotlari = [];
let ogrenciNot = [];
let harfNotlari = [];
let sayaclar = [];
let vizeOrt;
let finalOrt;
let sinifOrt;
let toplamVize = 0;
let toplamFinal = 0;
let sayacAA = 0;
let sayacCC = 0;
let sayacDC = 0;
let sayacFF = 0;

const puanAta = (kisiSayisi) => {
  for (let i = 0; i < kisiSayisi; i++) {
    vizeNotlari.push(Math.floor(Math.random() * 101));
    finalNotlari.push(Math.floor(Math.random() * 101));
  }
  for (let index = 0; index < vizeNotlari.length; index++) {
    toplamVize += vizeNotlari[index];
    toplamFinal += finalNotlari[index];
  }
};

puanAta(30);

const ogrenciNotHesapla = (vizeNotlari, finalNotlari, vizeOran) => {
  for (let index = 0; index < vizeNotlari.length; index++) {
    ogrenciNot.push(
      vizeNotlari[index] * vizeOran + finalNotlari[index] * (1 - vizeOran)
    );
  }
};

ogrenciNotHesapla(vizeNotlari, finalNotlari, 0.4);

const ortalamaHesapla = (toplam, elemanSayisi) => {
  return toplam / elemanSayisi;
};

vizeOrt = ortalamaHesapla(toplamVize, vizeNotlari.length);
finalOrt = ortalamaHesapla(toplamFinal, finalNotlari.length);
sinifOrt = vizeOrt * 0.4 + finalOrt * 0.6; //çan eğrisi

const harfNotuHesapla = (ogrenciNot) => {
  for (let index = 0; index < ogrenciNot.length; index++) {
    if (finalNotlari[index] < 35) {
      harfNotlari.push("FF");
      sayacFF++;
    } else if (
      ogrenciNot[index] <= sinifOrt + 5 &&
      ogrenciNot[index] >= sinifOrt - 10
    ) {
      harfNotlari.push("CC");
      sayacCC++;
    } else if (ogrenciNot[index] > sinifOrt + 5) {
      harfNotlari.push("AA");
      sayacAA++;
    } else if (ogrenciNot[index] < sinifOrt && finalNotlari[index] >= 35) {
      harfNotlari.push("DC");
      sayacDC++;
    } else {
      console.log("Hatalı ders notu");
    }
  }
};

harfNotuHesapla(ogrenciNot);

const seritCek = () => {
  console.log("--------------------");
};

console.log(harfNotlari);
seritCek();
console.log("AA", sayacAA, "CC", sayacCC, "DC", sayacDC, "FF", sayacFF);
sayaclar.push(sayacAA, sayacCC, sayacDC, sayacFF);
sayaclar.sort((a, b) => a - b);
sayaclar = sayaclar.reverse();
if (sayacFF >= harfNotlari.length / 3 && sayacFF === sayaclar[0]) {
  seritCek();
  console.log("Ders başarımı çok kötü");
  console.log("FF alanların sayısı:", sayacFF);
} else if (sayacAA >= harfNotlari.length / 3 && sayacAA === sayaclar[0]) {
  seritCek();
  console.log("Ders başarımı çok iyi");
  console.log("AA alanların sayısı:", sayacAA);
} else if (sayacCC >= harfNotlari.length / 3 && sayacCC === sayaclar[0]) {
  seritCek();
  console.log("Ders başarımı orta");
  console.log("CC alanların sayısı:", sayacCC);
} else if (sayacDC >= harfNotlari.length / 3 && sayacDC === sayaclar[0]) {
  seritCek();
  console.log("Ders başarımı kötü");
  console.log("DC alanların sayısı:", sayacDC);
}