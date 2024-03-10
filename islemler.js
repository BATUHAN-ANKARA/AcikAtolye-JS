function toplama(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Sayı dışında veri girilemez!");
  }
}

function cikartma(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    throw new Error("Sayı dışında veri girilemez!");
  }
}

function carpma(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    throw new Error("Sayı dışında veri girilemez!");
  }
}

function bolme(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (b === 0) {
      throw new Error("Bölen sıfır olamaz!");
    } else {
      return a / b;
    }
  } else {
    throw new Error("Sayı dışında veri girilemez!");
  }
}

function faktoriyel(a) {
  if (typeof a === "number") {
    if (a >= 0) {
      let carpim = 1;
      for (let index = 1; index <= a; index++) {
        carpim = carpim * index;
      }
      return carpim;
    } else {
      throw new Error(" Negatif sayı girilemez!");
    }
  } else {
    throw new Error("Sayı dışında veri girilemez!");
  }
}

let x = "Batuhan Selam";

module.exports = {
  toplama,
  carpma,
  cikartma,
  bolme,
  faktoriyel,
  x
};
