import {Card} from '../components/Card.js';
import Section from '../components/Section.js';
import {formElem} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js'
import UserInfo from '../components/UserInfo.js';
import {FormValidator} from '../components/FormValidator.js';
import '../pages/index.css';
import Api from '../components/Api.js';
import PopupWithDeleteForm from '../components/PopupWithDeleteForm.js';

function api(item) {
  const api = new Api({
    url: item,
    headers: {
      authorization: '5c0d23ff-2f59-4bc2-a6ef-f772c38f9e88',
      'Content-Type': 'application/json'
    }
  })
  return api;
}

const apiUser = api("https://nomoreparties.co/v1/cohort-41/users/me");
apiUser.getUserInfo()
.then((item) => {
  profile.setUserInfo(item);
}).catch((err) => {
  console.log(err);
});

const apiCard = api("https://mesto.nomoreparties.co/v1/cohort-41/cards");
apiCard.getAllCards()
.then((data) => {
  cardList.renderItem(data);
}).catch((err) => {
  console.log(err);
});

const apiLike = api("https://mesto.nomoreparties.co/v1/cohort-41/cards/")
const apiDeleteCard = api("https://mesto.nomoreparties.co/v1/cohort-41/cards/")
function renderCard(item) {
  const card = new Card(item, '.card-template_type_default', () => {
    imgItem.open(item);
  }, (item) => {
    formDelete.open();
    formDelete.setSubmitAction(() => {
      apiDeleteCard.deleteCard(item)
      .then(() => {
        card.handleRemoveClick();
        formDelete.close();
      })
    })
  }, (item) => {
    apiLike.putLike(item)
    .then((item) =>{
      card.toggleLike(item);
    })
  }, (item) => {
    apiLike.deleteLike(item)
    .then((item) => {
      card.toggleLike(item);
    }).catch((err) => {
      console.log(err);
    });
  }
  )
  return card.createCard();
}

const cardList = new Section(
  (item) => {
    cardList.addItem(renderCard(item));
  },
   '.cards');

const imgItem = new PopupWithImage('.popup_image');

imgItem.setEventListener();

const formAdd = new PopupWithForm({
  selectorPopup: '.popup_add',
  handleFormSubmit: (data) => {
    formAdd.loading();
    apiCard.addNewPlace(data)
    .then((data) => {
      cardList.addItem(renderCard(data));
      formAdd.close()
    }).catch((err) => {
      console.log(err);
    }).finally(() =>{
      formAdd.loadingEnd('Создать')
    })
  }
});

formAdd.setEventListener();

const apiAvatar = api('https://mesto.nomoreparties.co/v1/cohort-41/users/me/avatar')
const formAvatar = new PopupWithForm({
  selectorPopup: '.popup_avatar',
  handleFormSubmit: (data) => {
    formAvatar.loading();
    apiAvatar.editUserAvatar(data)
    .then((data) => {
      profile.setUserInfo(data);
      formAvatar.close();
    }).catch((err) => {
      console.log(err);
    }).finally(() =>{
      formAvatar.loadingEnd('Сохранить')
    })
  }
})

formAvatar.setEventListener();

const profile = new UserInfo({name: '.profile__name', about:'.profile__about-me', avatar: '.profile__avatar'});

const apiUserEdit = api("https://mesto.nomoreparties.co/v1/cohort-41/users/me")
const formEdit = new PopupWithForm({
  selectorPopup: '.popup_edit',
  handleFormSubmit: (data) => {
    formEdit.loading();
    apiUserEdit.editUserInfo(data)
    .then((data) => {
      profile.setUserInfo(data);
      formEdit.close();
    }).catch((err) => {
      console.log(err);
    }).finally(() =>{
      formEdit.loadingEnd('Сохранить')
    })
  }
})

formEdit.setEventListener();

const formDelete = new PopupWithDeleteForm('.popup_delete-image')

formDelete.setEventListener();


const buttonOpenAdd = document.querySelector('.profile__add-button');
buttonOpenAdd.addEventListener('click', () => {
  formAdd.open();
  validFormAdd.disabledButtonPlace();
})

const buttonOpenEdit = document.querySelector('.profile__edit-button');
buttonOpenEdit.addEventListener('click', () => {
  profile.getUserInfo();
  formEdit.open();
})

const clickOpenAvatar = document.querySelector('.profile__avatar-button');
clickOpenAvatar.addEventListener('click', () => {
  formAvatar.open();
})


const formPlaceElement = document.querySelector('.popup__info_add');
const formProfileElement = document.querySelector('.popup__info_edit');
const formAvatarElement = document.querySelector('.popup__info_avatar');
const validFormEdit = new FormValidator(formElem, formProfileElement);
validFormEdit.enableValidation();
const validFormAdd = new FormValidator(formElem, formPlaceElement);
validFormAdd.enableValidation();
const validFormAvatar = new FormValidator(formElem, formAvatarElement);
validFormAvatar.enableValidation();
