export default class Popup {
  constructor(selectorPopup) {
    this._selector = document.querySelector(selectorPopup);
    this._buttonClose = this._selector.querySelector('.popup__close');
  }

  open() {
    this._selector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._selector.addEventListener('mousedown', this._handleClickClose);
  }

  close() {
    this._selector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._selector.removeEventListener('mousedown', this._handleClickClose);
  }

  _handleEscClose = (evt)  => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClickClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close(evt.currentTarget);
    }
  }

  setEventListener(){
    this._buttonClose.addEventListener('click', () => {
      this.close();
    })
  }
}
