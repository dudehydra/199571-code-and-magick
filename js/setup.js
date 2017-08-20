'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_INIT = {
  getRandomWizards: function (names, lastNames, coatColors, eyesColors) {
    var maxWizards = 4;
    var wizardsArr = [];
    var namesNumberArr = getRandomArr(names.length);
    var lastNamesNumberArr = getRandomArr(lastNames.length);
    for (var i = 0; i < maxWizards; i++) {
      wizardsArr[i] = {
        name: names[namesNumberArr[i]] + ' ' + lastNames[lastNamesNumberArr[i]],
        eyesColor: getRandomElement(eyesColors),
        coatColor: getRandomElement(coatColors)
      };
    }
    return wizardsArr;
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
  removeClassHidden: function (elem) {
    elem.classList.remove('hidden');
  },
  init: function (wizard, fragment, elem, dialogElem, setupElem) {
    this.removeClassHidden(dialogElem);
    this.insertWizardFragments(wizard, fragment, elem);
    this.removeClassHidden(setupElem);
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
var getRandomArr = function (arrayLength) {
  var numbersArray = [];
  for (var j = 0; j < arrayLength; j++) {
    numbersArray[j] = j;
  }
  return numbersArray.sort(compareRandom);
};
wizards = WIZARDS_INIT.getRandomWizards(NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);
WIZARDS_INIT.init(wizards, setupListFragment, listElement, userDialog, setupSimilar);
