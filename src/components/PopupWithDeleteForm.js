import Popup from "./Popup.js";

export default class PopupWithDeleteForm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._element = this._popup.querySelector('.popup__info');
  }

  setEventListener() {
    this._element.querySelector('.popup__button_delete').addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    })
    super.setEventListener();
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }
}

