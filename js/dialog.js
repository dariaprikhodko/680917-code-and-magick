'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var submitElement = document.querySelector('.setup-submit');
  var closeElement = document.querySelector('.setup-close');

  // обработаем событие начала перетаскивания нашего диалога mousedown
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // Запомним координаты точки, с которой мы начали перемещать диалог
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    // При каждом движении мыши нам нужно обновлять смещение относительно первоначальной точки, чтобы диалог смещался на необходимую величину
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    // При отпускании кнопки мыши нужно переставать слушать события движения мыши
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      // Для этого при отпускании мыши мы повесим обработчик на click, который отменит действие по умолчанию, если перемещение имело место
      if (dragged) {
        var onClickPreventDefault = function (downEvt) {
          downEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    // Добавим обработчики события передвижения мыши и отпускания кнопки мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
  // При повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное
  var onCloseDialog = function () {
    setupDialogElement.style.top = null;
    setupDialogElement.style.left = null;
  };

  submitElement.addEventListener('click', onCloseDialog);
  closeElement.addEventListener('click', onCloseDialog);

  var onEscCLoseDialog = function (evt) {
    window.util.isEscEvent(evt, onCloseDialog);
  };
  document.addEventListener('keydown', onEscCLoseDialog);

})();
