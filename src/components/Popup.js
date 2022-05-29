export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._buttonClose = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleClickClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleClickClose);
  }

  _handleEscClose = (evt)  => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClickClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListener(){
    this._buttonClose.addEventListener('click', () => {
      this.close();
    })
  }
}
