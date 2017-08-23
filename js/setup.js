'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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
  init: function (wizard, fragment, elem, dialogElem, setupElem) {
    this.showNode(dialogElem);
    this.insertWizardFragments(wizard, fragment, elem);
    this.showNode(setupElem);
  }
};
var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var listElement = userDialog.querySelector('.setup-similar-list');
var setupSimilar = userDialog.querySelector('.setup-similar');
var setupListFragment = document.createDocumentFragment();
var wizards;
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
WIZARDS_INIT.init(wizards, setupListFragment, listElement, userDialog, setupSimilar);
