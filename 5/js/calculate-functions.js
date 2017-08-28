'use strict';
(function () {
  window.calculateFunctions = {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    compareRandom: function () {
      return Math.random() - 0.5;
    },
    randomizeOrder: function (array) {
      var arrayClone = array.slice(0, array.length);
      return arrayClone.sort(window.calculateFunctions.compareRandom);
    },
    incrementColorIndex: function (index, array) {
      var indexNumber = index;
      indexNumber = (indexNumber + 1) % array.length;
      return indexNumber;
    }
  };
})();
