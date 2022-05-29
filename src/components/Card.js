export class Card {
  constructor({name, link, likes, owner, _id}, cardSelector, userId, handleCardClick, handleDeleteClick, handlePutLikeClick, handleDislikeLikeClick) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = owner._id;
    this._cardId = _id;
    this._userId = userId;
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
    this._element.querySelector('.cards__name').textContent = this._name;
    this._numberOfLike = this._element.querySelector(".cards__number-of-likes");
    this._numberOfLike.textContent = this._likes.length;
    this._imagInfoCard.src = this._link;
    this._imagInfoCard.alt = this._name;
    this._likeStatus();

    return this._element;
  }

  _setEventListeners() {
    this._imagInfoCard = this._element.querySelector('.cards__image');
    this._like = this._element.querySelector('.cards__like');
    this._delete = this._element.querySelector('.cards__delete')
    this._like.addEventListener('click', () =>{
      this._handleLikeClick()
    });
    this._delete.addEventListener('click', () =>{
      this._handleDeleteClick(this._cardId);
    });
    this._imagInfoCard.addEventListener('click', this._handleCardClick);
  }

  _handleLikeClick() {
    if(this._like.classList.contains('cards__like_active')) {
      this._handleDislikeLikeClick(this._cardId);
    }else {
      this._handlePutLikeClick(this._cardId);
    }
  }

  toggleLike(item) {
    this._likes = item.likes;
    this._like.classList.toggle('cards__like_active');
    this._numberOfLike.textContent = this._likes.length;
  }

  _likeStatus() {
    if(this._likes.some((element) => element._id === this._userId)) {
      this._like.classList.add('cards__like_active');
    }
  }


  _setDeleteButton() {
    if(this._id === this._userId) {
      this._delete.classList.add('cards__delete_active');
    }
  }

  handleRemoveClick() {
    this._element.remove();
  }

}

