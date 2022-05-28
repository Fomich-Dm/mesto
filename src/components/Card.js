export class Card {
  constructor({name, link, likes, owner, _id}, cardSelector, handleCardClick, handleDeleteClick, handlePutLikeClick, handleDislikeLikeClick) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = owner._id;
    this._cardId = _id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handlePutLikeClick = handlePutLikeClick;
    this._handleDislikeLikeClick = handleDislikeLikeClick;
  }


  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards__item').cloneNode(true);
    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setDeleteButton();
    const imagInfoCard = this._element.querySelector('.cards__image');
    this._element.querySelector('.cards__name').textContent = this._name;
    this._element.querySelector(".cards__number-of-likes").textContent = this._likes.length;
    imagInfoCard.src = this._link;
    imagInfoCard.alt = this._name;
    this._likeStatus();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like').addEventListener('click', () =>{
      this._handleLikeClick()
    });
    this._element.querySelector('.cards__delete').addEventListener('click', () =>{
      this._handleDeleteClick(this._cardId);
    });
    this._element.querySelector('.cards__image').addEventListener('click', this._handleCardClick);
  }

  _handleLikeClick() {
    if(this._element.querySelector('.cards__like').classList.contains('cards__like_active')) {
      this._handleDislikeLikeClick(this._cardId);
    }else {
      this._handlePutLikeClick(this._cardId);
    }
  }

  toggleLike(item) {
    this._likes = item.likes;
    this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    this._element.querySelector(".cards__number-of-likes").textContent = this._likes.length;
  }

  _likeStatus() {
    if(this._likes.some((element) => element._id === '42d9cd9609783d1d85646282')) {
      this._element.querySelector('.cards__like').classList.add('cards__like_active');
    }
  }


  _setDeleteButton() {
    const idCard = '42d9cd9609783d1d85646282'
    if(this._id === idCard) {
      this._element.querySelector('.cards__delete').classList.add('cards__delete_active');
    }
  }

  handleRemoveClick() {
    this._element.remove();
  }

}

