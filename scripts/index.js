import {Card} from './Card.js';
import {formElem} from './cards.js';
import {FormValidator} from './FormValidator.js';

const cards = document.querySelector('.cards');
const formPlaceElement = document.querySelector('.popup__info_add');
const formProfileElement = document.querySelector('.popup__info_edit');

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');
const closePopupEdit = document.querySelector('.popup__close_edit');
const closePopupAdd = document.querySelector('.popup__close_add');

const nameInput =  document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAddMe =  document.querySelector('.profile__about-me');
const popupButtonAdd = document.querySelector('.popup__button_add');

const popupImage = document.querySelector('.popup_image');
const imgPopup = document.querySelector('.popup__img');
const placeTitle =  document.querySelector('.popup__title-place');


function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  item.addEventListener('mousedown', closeClick);
}

function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  item.removeEventListener('mousedown', closeClick);
}

function closeEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function closeClick(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget);
  }
}

function fillProfileInfo() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAddMe.textContent;
}

function disabledButtonPlace() {
  popupButtonAdd.setAttribute('disabled', 'disabled');
  popupButtonAdd.classList.add('popup__button_inactive');
}

function submitProfileForm (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAddMe.textContent = jobInput.value;


  closePopup(popupEdit);
}

function renderCard(item) {

  const card = new Card(item, '.card-template_type_default');
  const cardElementsfwe = card.createCard();
  cards.prepend(cardElementsfwe);
}

const addCard = (event) => {
  event.preventDefault();


  const newNameCard = event.currentTarget.querySelector('.popup__input_type_place').value;
  const newImageCard = event.currentTarget.querySelector('.popup__input_type_image').value;
  const newCard = {name : newNameCard, link : newImageCard};


  renderCard(newCard);
  closePopup(popupAdd);
  formPlaceElement.reset();
  disabledButtonPlace()
}




openPopupEdit.addEventListener('click', function() {
  openPopup(popupEdit)
  fillProfileInfo()
});
openPopupAdd.addEventListener('click', function() {
  openPopup(popupAdd)
});

closePopupEdit.addEventListener('click', function() {
  closePopup(popupEdit)
});
closePopupAdd.addEventListener('click', function() {
  closePopup(popupAdd)
});

formProfileElement.addEventListener('submit', submitProfileForm);
formPlaceElement.addEventListener('submit', addCard);


const formEdit = new FormValidator(formElem, formProfileElement);
formEdit.enableValidation();
const formAdd = new FormValidator(formElem, formPlaceElement);
formAdd.enableValidation();

export {popupImage, imgPopup, placeTitle, closePopup, openPopup};
