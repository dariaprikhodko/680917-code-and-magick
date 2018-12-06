'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var showUserDialog = function () {
  var userDialogElement = document.querySelector('.setup');
  userDialogElement.classList.remove('hidden');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');

  return similarListElement;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < wizards.length; i++) {
    {
      name: WIZARD_NAMES[Math.floor(Math.random() * 6)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * 6)],
      coatColor: COAT_COLOR[Math.floor(Math.random() * 6)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * 5)],
    },
    {
      name: WIZARD_NAMES[Math.floor(Math.random() * 6)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * 6)],
      coatColor: COAT_COLOR[Math.floor(Math.random() * 6)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * 5)],
    },
    {
      name: WIZARD_NAMES[Math.floor(Math.random() * 6)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * 6)],
      coatColor: COAT_COLOR[Math.floor(Math.random() * 6)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * 5)],
    },
    {
      name: WIZARD_NAMES[Math.floor(Math.random() * 6)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * 6)],
      coatColor: COAT_COLOR[Math.floor(Math.random() * 6)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * 5)],
    }
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  return wizardElement;
};

var showSetupSimilar = function() {
  userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
};

var init = function() {
  showUserDialog()
  generateWizards()
  renderWizard()
  showSetupSimilar()
};