const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function(param) {
    if (typeof param === "string") {
      if (isNaN(param)) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  },
  addString: function(param) {
    if (typeof param === "string") {
      if (isNaN(param)) {
        this.NaNyStrings.push(param);
        return true;
      } else {
        this.numberyStrings.push(param);
        return true;
      }
    } else {
      return false;
    }
  },
  allStrings: function() {
    return [...this.numberyStrings, ...this.NaNyStrings];
  },
  evenStrings: function() {
    return this.numberyStrings.filter(number => number % 2 === 0);
  },
  oddStrings: function() {
    return this.numberyStrings.filter(
      number => number % 2 === 1 || number % 2 === -1
    );
  },
  negativeStrings: function() {
    return this.numberyStrings.filter(number => number < 0);
  },
  positiveStrings: function() {
    return this.numberyStrings.filter(number => number >= 0);
  },
  zeroStrings: function() {
    return this.numberyStrings.filter(number => number == 0);
  },
  numberyAsNumbers: function() {
    return this.numberyStrings.map(number => Number(number));
  },
  NaNyAsNumbers: function() {
    return this.NaNyStrings.map(number => Number(number));
  },
  sumOfNumbery: function() {
    return this.numberyStrings.reduce(function(a, b) {
      return a + Number(b);
    }, 0);
  },

  sumOfNaNy: function() {
    return this.NaNyStrings.reduce(function(a, b) {
      return a + Number(b);
    }, 0);
  }
};
