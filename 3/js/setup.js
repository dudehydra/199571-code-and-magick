'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var listElement = userDialog.querySelector('.setup-similar-list');
var setupSimilar = userDialog.querySelector('.setup-similar');
var setupListFragment = document.createDocumentFragment();
var wizards;
var getRandomNumber = function (length) {
  return Math.round(Math.random() * (length - 1));
};
var getRandomName = function (names, lastNames) {
  return names[getRandomNumber(names.length)] + ' ' + lastNames[getRandomNumber(lastNames.length)];
};
var getRandomWizardOptions = function (names, lastNames, coatColor, eyesColor) {
  var maxCount = 4;
  var options = [];
  for (var i = 0; i < maxCount; i++) {
    options[i] = {
      name: getRandomName(names, lastNames),
      coatColor: coatColor[getRandomNumber(coatColor.length)],
      eyesColor: eyesColor[getRandomNumber(eyesColor.length)]
    };
  }
  return options;
};
var drawWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var insertWizardFragments = function (wizard, fragment, elem) {
  for (var i = 0; i < wizard.length; i++) {
    fragment.appendChild(drawWizard(wizard[i]));
  }
  elem.appendChild(fragment);
};
var removeClassHidden = function (elem) {
  elem.classList.remove('hidden');
};
wizards = getRandomWizardOptions(NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS);
removeClassHidden(userDialog);
insertWizardFragments(wizards, setupListFragment, listElement);
removeClassHidden(setupSimilar);
