const typeModule = require("./typeControl");
const sayiKontrol = typeModule.controlNumber;

const toplama = (a, b) => {
  if (sayiKontrol(a) && sayiKontrol(b)) {
    return a + b;
  } else {
    throw new Error("Toplama=> Sayı girilmeli!");
  }
};

const cikartma = (a, b) => {
  if (sayiKontrol(a) && sayiKontrol(b)) {
    return a - b;
  } else {
    throw new Error("cikartma=> Sayı girilmeli!");
  }
};

const carpma = (a, b) => {
  if (sayiKontrol(a) && sayiKontrol(b)) {
    return a * b;
  } else {
    throw new Error("carpma=> Sayı girilmeli!");
  }
};

const bolme = (a, b) => {
  if (sayiKontrol(a) && sayiKontrol(b)) {
    if (b === 0) {
      throw new Error("bolme=> Bölen sayı sıfır olamaz!");
    } else {
      return a / b;
    }
  } else {
    throw new Error("bolme=> Sayı girilmeli!");
  }
};

const mod = (a, b) => {
  if (sayiKontrol(a) && sayiKontrol(b)) {
    return a % b;
  } else {
    throw new Error("mod=> Sayı girilmeli!");
  }
};

const faktoriyel = (sayi) => {
  if (sayiKontrol(sayi)) {
    if (sayi >= 0) {
      let carpim = 1;
      for (let index = 1; index <= sayi; index++) {
        carpim = carpim * index;
      }
      return carpim;
    } else {
      throw new Error("faktoriyel=> Sayı sıfırdan büyük olmalı!");
    }
  } else {
    throw new Error("faktoriyel=> Sayı girilmeli!");
  }
};

const mutlak = (sayi) => {
  if (sayiKontrol(sayi)) {
    if (sayi < 0) {
      return -sayi;
    } else {
      return sayi;
    }
  } else {
    throw new Error("mutlak=> Sayı girilmeli!");
  }
};

module.exports = {
  toplama,
  cikartma,
  carpma,
  bolme,
  faktoriyel,
  mod,
  mutlak,
};
