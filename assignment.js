const feetToMile = (feet) => {
  if (typeof feet === "number" && feet >= 0) {
    return feet / 5280;
  } else {
    let err = "please input a positive integer number!";
    return err;
  }
};
