'use strict';
(function () {
  var WIZARDS_AMOUNT = 4;

  var wizardTemplate = document.querySelector('#similar-wizard-template');
  var similarElement = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };


  window.render = function (data) {
    var takeNumber = data.length > WIZARDS_AMOUNT ? WIZARDS_AMOUNT : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    similarElement.classList.remove('hidden');
  };

})();
