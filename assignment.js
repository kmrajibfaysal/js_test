// Q-1
const feetToMile = (feet) => {
  if (typeof feet === "number" && feet >= 0) {
    return feet / 5280;
  } else {
    let err = "please input a positive integer number!";
    return err;
  }
};

// Q-2
const woodCalculator = (chair, table, bed) => {
  let totalWood = 0;

  if (typeof (chair, table, bed) === "number") {
    totalWood = parseInt(chair) * 1 + parseInt(table) * 3 + parseInt(bed) * 5;
    // as chair consume 1 cft , table consume 3cft , bed consume 5 cft wood.
    return totalWood;
  } else {
    return "Please enter a valid quantity!";
  }
};
// Q-3

const brickCalculator = (floor) => {
  const firstTen = 10 * 15 * 1000;
  const upToTwenty = 10 * 12 * 1000;
  if (floor > 0 && floor <= 10) {
    return `1Total brick required: ${floor * 15 * 1000}`;
  } else if (floor > 10 && floor <= 20) {
    return `2Total brick required: ${firstTen + (floor - 10) * 12 * 1000}`;
  } else if (floor > 20) {
    return `3Total brick required: ${
      firstTen + upToTwenty + (floor - 20) * 10 * 1000
    }`;
  }
};

// Q-4
const tinyFriend = (arr) => {
  const shorter = (left, right) => (left.length <= right.length ? left : right);

  const smallest = arr.flat(Infinity).reduce(shorter);
  return smallest;
};
