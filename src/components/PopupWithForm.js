import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._handleFormSubmit  = handleFormSubmit;
    this._element = this._selector.querySelector('.popup__info');
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] =  input.value;
    });

    return this._formValues;
  }

  setEventListener() {
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListener();
  }

  close() {
    this._element.reset();
    super.close();
  }
}
