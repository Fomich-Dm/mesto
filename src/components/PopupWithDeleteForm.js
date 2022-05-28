import Popup from "./Popup.js";

export default class PopupWithDeleteForm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._element = this._selector.querySelector('.popup__info');
  }

  setEventListener() {
    this._element.querySelector('.popup__button_delete').addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    })
    super.setEventListener();
  }

  setSubmitAction(item) {
    this._handleSubmitCallback = item;
  }
}

