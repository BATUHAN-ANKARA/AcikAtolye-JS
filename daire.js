const typeModule = require("./typeControl");
const sayiKontrol = typeModule.controlNumber;

const PI = 3.14;

const cevre = (r) => {
  if (sayiKontrol(r)) {
    if (r < 0) {
      throw new Error("Daire çevre=> Yarıçap sıfırdan küçük olamaz!");
    } else {
      return 2 * PI * r;
    }
  } else {
    throw new Error("Daire çevre=> Yarıçap sayı olmalı!");
  }
};

const alan = (r) => {
  if (sayiKontrol(r)) {
    if (r < 0) {
      throw new Error("Daire alan=> Yarıçap sıfırdan küçük olamaz!");
    } else {
      return PI * r * r;
    }
  } else {
    throw new Error("Daire alan=> Yarıçap sayı olmalı!");
  }
};

module.exports = {
  cevre,
  alan,
};
