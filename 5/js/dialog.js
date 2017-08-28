'use strict';
(function () {
  var KEY_CODE = {
    enter: 13,
    esc: 27
  };
  var setupHandlers = {
    openPopup: function () {
      window.wizardsSettings.userDialog.classList.remove('hidden');
      document.addEventListener('keydown', setupHandlers.popupEscPressHandler);
    },
    closePopup: function () {
      window.wizardsSettings.userDialog.classList.add('hidden');
      document.removeEventListener('keydown', setupHandlers.popupEscPressHandler);
    },
    popupEscPressHandler: function (evt) {
      if (evt.keyCode === KEY_CODE.esc && document.activeElement !== setupUserName) {
        setupHandlers.closePopup();
      }
    },
    popupEnterPressHandler: function (evt) {
      if (evt.keyCode === KEY_CODE.enter && this === setupOpen) {
        setupHandlers.openPopup();
      } else if (evt.keyCode === KEY_CODE.enter && this === setupClose) {
        setupHandlers.closePopup();
      }
    }
  };
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('.setup-user-name');
  setupOpen.addEventListener('click', setupHandlers.openPopup);
  setupOpen.addEventListener('keydown', setupHandlers.popupEnterPressHandler);
  setupClose.addEventListener('click', setupHandlers.closePopup);
  setupClose.addEventListener('keydown', setupHandlers.popupEnterPressHandler);
})();
