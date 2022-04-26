import {initialCards} from './cards.js';
import {popupImage, imgPopup, placeTitle, closePopup, openPopup} from './Index.js';




export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }


  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const imagInfoCard = this._element.querySelector('.cards__image');
    this._element.querySelector('.cards__name').textContent = this._name;
    imagInfoCard.src = this._link;
    imagInfoCard.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.cards__delete').addEventListener('click', () => {
      this._handleRemoveClick();
    });
    this._element.querySelector('.cards__image').addEventListener('click', () => {
      this._handleImgClick();
    });
    document.querySelector('.popup__close_image').addEventListener('click', () => {
      this._handleButtonImgClick();
    });
  }

  _handleLikeClick() {
    this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
  }

  _handleRemoveClick() {
    this._element.querySelector('.cards__delete').closest('.cards__item').remove();
  }

 _handleImgClick() {
    imgPopup.src = this._link;
    imgPopup.alt = this._name;
    placeTitle.textContent = this._name;
    openPopup(popupImage);
  }

  _handleButtonImgClick() {
    closePopup(popupImage);
  }

}

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template_type_default');
  const cardElement = card.createCard();

  document.querySelector('.cards').append(cardElement);
});