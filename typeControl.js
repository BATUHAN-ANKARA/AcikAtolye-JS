const controlNumber = (x) => {
  if (typeof x === "number") {
    return true;
  } else {
    return false;
  }
};

const controlString = (x) => {
  if (typeof x === "string") {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  controlNumber,
  controlString,
};
