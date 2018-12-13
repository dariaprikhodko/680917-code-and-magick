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


// module4-task1
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userNameInput = document.querySelector('.setup-user-name');

// для смены цвета по клику нужно обозначить скрытые DOM элементы формы ввода .wizard-coat, .wizard-eyes, .setup-fireball-wrap
var inputWizardCoat = document.querySelector('input[name=coat-color]');
var inputWizardEyes = document.querySelector('input[name=eyes-color]');
var inputWizardFireball = document.querySelector('input[name=fireball-color]');

// для смены цвета по клику находим DOM элементы по классу
var wizardCoatElement = document.querySelector('.wizard-coat');
var wizardEyesElement = document.querySelector('.wizard-eyes');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');


// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// функция по смене цвета
// функция берет на вход DOM элемент, навешивает на него обработчик событий по клику, после клика генерируется случайный цвет
// которым заливается фон, скрытая форма ввода
var chooseRandColor = function (element, attribute, colors, input) {
  element.addEventListener('click', function () {
    var randColor = getRandomNum(colors);
    element.style[attribute] = randColor;
    input.value = randColor;
  });
};

chooseRandColor(wizardCoatElement, 'fill', COAT_COLORS, inputWizardCoat);
chooseRandColor(wizardEyesElement, 'fill', EYES_COLORS, inputWizardEyes);
chooseRandColor(wizardFireballElement, 'background', FIREBALL_COLORS, inputWizardFireball);
