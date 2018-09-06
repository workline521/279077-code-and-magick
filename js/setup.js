'use strict';

var TEST_WIZARDS = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],

  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],

  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomName = function (names, surnames) {
  var randomName = names[window.getRandomInteger(0, names.length - 1)] + ' ' + surnames[window.getRandomInteger(0, surnames.length - 1)];
  return randomName;
};

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (testWizardObject, wizardTemplate) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName(testWizardObject.names, testWizardObject.surnames);
  wizardElement.querySelector('.wizard-coat').style.fill = testWizardObject.coatColor[window.getRandomInteger(0, testWizardObject.coatColor.length - 1)];
  wizardElement.querySelector('.wizard-eyes').style.fill = testWizardObject.eyesColor[window.getRandomInteger(0, testWizardObject.eyesColor.length - 1)];
  return wizardElement;

};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(TEST_WIZARDS, similarWizardTemplate));
}
similarListElement.appendChild(fragment);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

