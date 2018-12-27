'use strict';

(function () {
  // для смены цвета по клику нужно обозначить скрытые DOM элементы формы ввода .wizard-coat, .wizard-eyes, .setup-fireball-wrap
  var inputWizardCoat = document.querySelector('input[name=coat-color]');
  var inputWizardEyes = document.querySelector('input[name=eyes-color]');
  var inputWizardFireball = document.querySelector('input[name=fireball-color]');

  // для смены цвета по клику находим DOM элементы по классу
  var wizardCoatElement = document.querySelector('.wizard-coat');
  var wizardEyesElement = document.querySelector('.wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

  // функция берет на вход DOM элемент, навешивает на него обработчик событий по клику, после клика генерируется случайный цвет
  // которым заливается фон, скрытая форма ввода
  var chooseRandColor = function (element, attribute, colors, input) {
    element.addEventListener('click', function () {
      var randColor = window.util.getRandomNum(colors);
      element.style[attribute] = randColor;
      input.value = randColor;
    });
  };

  chooseRandColor(wizardCoatElement, 'fill', window.util.COAT_COLORS, inputWizardCoat);
  chooseRandColor(wizardEyesElement, 'fill', window.util.EYES_COLORS, inputWizardEyes);
  chooseRandColor(wizardFireballElement, 'background', window.util.FIREBALL_COLORS, inputWizardFireball);

})();
