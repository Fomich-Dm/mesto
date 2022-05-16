import {Card} from '../components/Card.js';
import Section from '../components/Section.js';
import {formElem, initialCards} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js';
import {FormValidator} from '../components/FormValidator.js';
import '../pages/index.css';

const cardList = new Section({
  item: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-template_type_default', () => {
      imgItem.open(item);
    });
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
}, '.cards');

cardList.renderItem();

const imgItem = new PopupWithImage('.popup_image');

imgItem.setEventListener();

const formAdd = new PopupWithForm({
  selectorPopup: '.popup_add',
  handleFormSubmit: (item) => {
    const card = new Card(item, '.card-template_type_default', () => {
      imgItem.open(item);
    });
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
    formAdd.close()
  }
});

formAdd.setEventListener();

const profile = new UserInfo({name: '.profile__name', profession:'.profile__about-me'});

const formEdit = new PopupWithForm({
  selectorPopup: '.popup_edit',
  handleFormSubmit: (item) => {
    profile.setUserInfo(item);
    formEdit.close();
  }
});

formEdit.setEventListener();


const buttonOpenAdd = document.querySelector('.profile__add-button');
buttonOpenAdd.addEventListener('click', () => {
  formAdd.open();
})

const buttonOpenEdit = document.querySelector('.profile__edit-button');
buttonOpenEdit.addEventListener('click', () => {
  profile.getUserInfo();
  formEdit.open();
})

const formPlaceElement = document.querySelector('.popup__info_add');
const formProfileElement = document.querySelector('.popup__info_edit');
const validFormEdit = new FormValidator(formElem, formProfileElement);
validFormEdit.enableValidation();
const validFormAdd = new FormValidator(formElem, formPlaceElement);
validFormAdd.enableValidation();
