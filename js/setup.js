'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_AMOUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');

  var generateWizards = function () {
    var wizards = [];
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      wizards.push({
        name: window.util.getRandomNum(WIZARD_NAMES) + ' ' + window.util.getRandomNum(WIZARD_SURNAMES),
        coatColor: window.util.getRandomNum(window.util.COAT_COLORS),
        eyesColor: window.util.getRandomNum(window.util.EYES_COLORS)
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
    var wizardList = generateWizards();
    renderWizards(wizardList);
    showSetupSimilar();
  };

  init();

  // module4-task1
  var userNameInputElement = document.querySelector('.setup-user-name');

  // Нажатие на элемент .setup-open удаляет класс hidden
  // у блока setup. Нажатие на элемент .setup-close, расположенный
  // внутри блока setup возвращает ему класс hidden.
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = userDialogElement.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && userNameInputElement !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialogElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
