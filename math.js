const toplama = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};

const cikartma = (sayi1, sayi2) => {
  return sayi1 - sayi2;
};

const carpma = (sayi1, sayi2) => {
  return sayi1 * sayi2;
};

const bolme = (sayi1, sayi2) => {
  if (sayi2 === 0) {
    throw new Error ("Bölen 0 olamaz");
  } else {
    return sayi1 / sayi2;
  }
};

const mod = (sayi1, sayi2) => {
  if (sayi2 === 0) {
    return "mod 0'a göre olamaz";
  } else {
    return sayi1 % sayi2;
  }
};

let isim = "batuhan"

module.exports = {
  toplama,
  cikartma,
  carpma,
  bolme,
  mod,
};
