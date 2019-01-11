'use strict';
(function () {
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var inputWizardEyes = document.querySelector('input[name=eyes-color]');
  var inputWizardCoat = document.querySelector('input[name=coat-color]');
  var wizardCoatElement = document.querySelector('.wizard-coat');
  var wizardEyesElement = document.querySelector('.wizard-eyes');

  // var inputFireballColor = document.querySelector('#fireball-color');

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };


  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.getRandomNum(COAT_COLORS);
    inputWizardCoat.value = newColor;
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.getRandomNum(EYES_COLORS);
    inputWizardEyes.style.fill = newColor;
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;

})();
