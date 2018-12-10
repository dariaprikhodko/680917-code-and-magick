'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var userDialogElement = document.querySelector('.setup');
var similarListElement = userDialogElement.querySelector('.setup-similar-list');

var showUserDialog = function () {
  userDialogElement.classList.remove('hidden');
};

var getRandomNum = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards.push({
      name: getRandomNum(WIZARD_NAMES) + ' ' + getRandomNum(WIZARD_SURNAMES),
      coatColor: getRandomNum(COAT_COLORS),
      eyesColor: getRandomNum(EYES_COLORS)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var showSetupSimilar = function () {
  userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
};

var init = function () {
  showUserDialog();
  var wizardList = generateWizards();
  renderWizards(wizardList);
  showSetupSimilar();
};

init();
