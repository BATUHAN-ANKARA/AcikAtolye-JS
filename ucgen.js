const typeModule = require("./typeControl");
const sayiKontrol = typeModule.controlNumber

const alan = (t, h) => {
  if (sayiKontrol(t) && sayiKontrol(h)) {
    if (t < 0 || h < 0) {
      throw new Error("üçgen alan=> Sayıları sıfırdan küçük girmeyiniz!");
    } else {
      return (t * h) / 2;
    }
  } else {
    throw new Error("üçgen alan=> Sayı girilmeli!");
  }
};

const dikUcgenCevre = (a, b) => {
  if (sayiKontrol(a) && sayiKontrol(b)) {
    if (a < 0 || b < 0) {
      throw new Error("Dik üçgen çevre=> Sayılar sıfırdan küçük olamaz!");
    } else {
      let c = (a * a + b * b) ** (1 / 2);
      return a + b + c;
    }
  } else {
    throw new Error("Dik üçgen çevre=> Sayı girilmeli!");
  }
};

module.exports = {
  alan,
  dikUcgenCevre,
};
