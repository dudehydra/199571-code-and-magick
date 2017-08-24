/* eslint-disable no-invalid-this */
'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_INIT = {
  generateSimilarWizards: function (names, lastNames, coatColors, eyesColors) {
    var wizardsCount = 4;
    var wizardsList = [];
    var namesShuffled = randomizeOrder(names);
    var lastNamesShuffled = randomizeOrder(lastNames);
    for (var i = 0; i < wizardsCount; i++) {
      wizardsList[i] = {
        name: namesShuffled[i] + ' ' + lastNamesShuffled[i],
        eyesColor: getRandomElement(eyesColors),
        coatColor: getRandomElement(coatColors)
      };
    }
    return wizardsList;
  },
  drawWizard: function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  },
  insertWizardFragments: function (wizard, fragment, elem) {
    for (var i = 0; i < wizard.length; i++) {
      fragment.appendChild(this.drawWizard(wizard[i]));
    }
    elem.appendChild(fragment);
  },
  showNode: function (elem) {
    elem.classList.remove('hidden');
  },
  init: function (wizard, fragment, elem, setupElem) {
    this.insertWizardFragments(wizard, fragment, elem);
    this.showNode(setupElem);
  }
};
var KEY_CODE = {
  enter: 13,
  esc: 27
};
var setupHandlers = {
  openPopup: function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', this.popupEscPressHandler);
  },
  closePopup: function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', this.popupEscPressHandler);
  },
  popupEscPressHandler: function (evt) {
    if (evt.keyCode === KEY_CODE.esc && document.activeElement !== setupUserName) {
      setupHandlers.closePopup();
    }
  },
  popupEnterPressHandler: function (evt) {
    if (evt.keyCode === KEY_CODE.enter && this === setupOpen) {
      setupHandlers.openPopup();
    } else if (evt.keyCode === KEY_CODE.enter && this === setupClose) {
      setupHandlers.closePopup();
    }
  },
  wizardElemFill: function (elem, array) {
    elem.style.fill = getRandomElement(array);
  },
  wizardFireballFill: function (elem, array) {
    elem.style.backgroundColor = getRandomElement(array);
  }
};
var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var listElement = userDialog.querySelector('.setup-similar-list');
var setupSimilar = userDialog.querySelector('.setup-similar');
var setupListFragment = document.createDocumentFragment();
var wizards;
var setupWizard = document.querySelector('.wizard');
var setupWizardCoat = document.querySelector('.wizard-coat');
var setupWizardEyes = document.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
var compareRandom = function () {
  return Math.random() - 0.5;
};
var randomizeOrder = function (array) {
  var arrayClone = array.slice(0, array.length);
  return arrayClone.sort(compareRandom);
};
wizards = WIZARDS_INIT.generateSimilarWizards(NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);
WIZARDS_INIT.init(wizards, setupListFragment, listElement, setupSimilar);
setupOpen.addEventListener('click', setupHandlers.openPopup);
setupOpen.addEventListener('keydown', setupHandlers.popupEnterPressHandler);
setupClose.addEventListener('click', setupHandlers.closePopup);
setupClose.addEventListener('keydown', setupHandlers.popupEnterPressHandler);
setupWizard.addEventListener('click', function (evt) {
  var evtTarget = evt.target;
  switch (evtTarget) {
    case setupWizardCoat:
      setupHandlers.wizardElemFill(setupWizardCoat, COAT_COLORS);
      break;
    case setupWizardEyes:
      setupHandlers.wizardElemFill(setupWizardEyes, EYES_COLORS);
      break;
  }
});
setupFireball.addEventListener('click', function () {
  setupHandlers.wizardFireballFill(this, FIREBALL_COLORS);
});

