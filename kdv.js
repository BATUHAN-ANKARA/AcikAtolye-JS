const typeModule = require("./typeControl");
const sayiKontrol = typeModule.controlNumber;

const tip1 = (fiyat) => {
  if (sayiKontrol(fiyat)) {
    if (fiyat < 0) {
      throw new Error("KDV TİP1=>Fiyat sıfırdan küçük olamaz!");
    } else {
      let kdvFark = fiyat * 0.01;
      let yeniFiyat = fiyat + kdvFark;
      return yeniFiyat;
    }
  } else {
    throw new Error("KDV TİP1=>Sayı girilmeli!");
  }
};

const tip2 = (fiyat) => {
  if (sayiKontrol(fiyat)) {
    if (fiyat < 0) {
      throw new Error("KDV TİP2=>Fiyat sıfırdan küçük olamaz!");
    } else {
      let kdvFark = fiyat * 0.1;
      let yeniFiyat = fiyat + kdvFark;
      return yeniFiyat;
    }
  } else {
    throw new Error("KDV TİP2=>Sayı girilmeli!");
  }
};

const tip3 = (fiyat) => {
  if (sayiKontrol(fiyat)) {
    if (fiyat < 0) {
      throw new Error("KDV TİP3=>Fiyat sıfırdan küçük olamaz!");
    } else {
      let kdvFark = fiyat * 0.2;
      let yeniFiyat = fiyat + kdvFark;
      return yeniFiyat;
    }
  } else {
    throw new Error("KDV Tip3=>Sayı girilmeli!");
  }
};

module.exports = {
  tip1,
  tip2,
  tip3,
};
