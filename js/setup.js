'use strict';

var wizardData = [
  {
    name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']

  },
  {
    name: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  },
  {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
  },
  {
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  }

];

var getRandomName = function () {
  var randomName = wizardData[0].name[window.getRandomInteger(0, 7)] + ' ' + wizardData[1].name[window.getRandomInteger(0, 7)];
  return randomName;
};

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName();
  wizardElement.querySelector('.wizard-coat').style.fill = wizardData[2].coatColor[window.getRandomInteger(0, 5)];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardData[3].eyesColor[window.getRandomInteger(0, 4)];
  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
