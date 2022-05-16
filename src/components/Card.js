export class Card {
  constructor({name, link}, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element.querySelector('.cards__like').addEventListener('click', () =>{
      this._handleLikeClick()
    });
    this._element.querySelector('.cards__delete').addEventListener('click', () => {
      this._handleRemoveClick();
    });
    this._element.querySelector('.cards__image').addEventListener('click', this._handleCardClick);
  }

  _handleLikeClick() {
    this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
  }

  _handleRemoveClick() {
    this._element.remove();
  }

}

