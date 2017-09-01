'use strict';
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizard = document.querySelector('.wizard');
  var setupWizardCoat = document.querySelector('.wizard-coat');
  var setupWizardEyes = document.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var colorsIndex = {
    coat: 0,
    eyes: 0,
    fireball: 0
  };
  var colorize = {
    wizardElemFill: function (elem, array, index) {
      elem.style.fill = array[index];
    },
    wizardFireballFill: function (elem, array, index) {
      elem.style.backgroundColor = array[index];
    }
  };
  setupWizard.addEventListener('click', function (evt) {
    var evtTarget = evt.target;
    switch (evtTarget) {
      case setupWizardCoat:
        colorize.wizardElemFill(setupWizardCoat, window.setup.coatColors, colorsIndex.coat);
        colorsIndex.coat = window.calculateFunctions.incrementColorIndex(colorsIndex.coat, window.setup.coatColors);
        break;
      case setupWizardEyes:
        colorize.wizardElemFill(setupWizardEyes, window.setup.eyesColors, colorsIndex.eyes);
        colorsIndex.eyes = window.calculateFunctions.incrementColorIndex(colorsIndex.eyes, window.setup.eyesColors);
        break;
    }
    return false;
  });
  setupFireball.addEventListener('click', function () {
    colorize.wizardFireballFill(setupFireball, FIREBALL_COLORS, colorsIndex.fireball);
    colorsIndex.fireball = window.calculateFunctions.incrementColorIndex(colorsIndex.fireball, FIREBALL_COLORS);
  });
})();
