const typeModule = require("./typeControl");

const gunaydin = (isim) => {
  if (typeModule.controlString(isim)) {
    return "Merhaba " + isim + " günaydın";
  } else {
    throw new Error("Günaydın=> Metin girilmeli!");
  }
};

const tunaydin = (isim) => {
  if (typeModule.controlString(isim)) {
    return "Merhaba " + isim + " tünaydın";
  } else {
    throw new Error("tunaydin=> Metin girilmeli!");
  }
};

const iyiAksamlar = (isim) => {
  if (typeModule.controlString(isim)) {
    return "Merhaba " + isim + " iyi akşamlar";
  } else {
    throw new Error("iyiAksamlar=> Metin girilmeli!");
  }
};

const iyiGeceler = (isim) => {
  if (typeModule.controlString(isim)) {
    return "Merhaba " + isim + " iyi geceler";
  } else {
    throw new Error("iyiGeceler=> Metin girilmeli!");
  }
};

module.exports = {
  gunaydin,
  tunaydin,
  iyiAksamlar,
  iyiGeceler,
};
