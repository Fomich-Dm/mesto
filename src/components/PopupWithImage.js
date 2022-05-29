import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._image = this._popup.querySelector('.popup__img');
    this._name = this._popup.querySelector('.popup__title-place');
  }

  open({name, link}) {
    this._image.src = link;
    this._image.alt = name;
    this._name.textContent = name;

    super.open();
  }
}
