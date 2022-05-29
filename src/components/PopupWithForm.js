import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
constructor({selectorPopup, handleFormSubmit}) {
    super(selectorPopup);
    this._handleFormSubmit  = handleFormSubmit;
    this._element = this._popup.querySelector('.popup__info');
    this._button = this._popup.querySelector('.popup__button');
    this._inputList = this._element.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
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

  loading() {
    this._button.textContent = "Сохранение...";
  }

  loadingEnd(text) {
    this._button.textContent = text;
  }

}





