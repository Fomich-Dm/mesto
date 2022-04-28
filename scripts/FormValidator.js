export class FormValidator {
  constructor(config, data) {
    this._form = config.form;
    this._inputError = config.inputError
    this._inputErrorActive = config.inputErrorActive
    this._inputForm = config.inputForm
    this._submitButton = config.submitButton
    this._submitButtonInactive = config.submitButtonInactive
    this._data = data;
    this._inputList = Array.from(this._data.querySelectorAll(this._inputForm));
    this._buttonElement = this._data.querySelector(this._submitButton);
  };

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._data.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorActive);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._data.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._inputErrorActive);
    errorElement.textContent = '';
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._form));

    formList.forEach((item) => {

      this._setEventListeners(item);
    });
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    })
  };

  _enabledButtonPlace = () => {
    this._buttonElement.classList.remove(this._submitButtonInactive);
    this._buttonElement.disabled = false;
  };

  disabledButtonPlace = () => {
    this._buttonElement.classList.add(this._submitButtonInactive);
    this._buttonElement.disabled = true;;
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disabledButtonPlace();
    } else {
      this._enabledButtonPlace();
    }
  };
}

