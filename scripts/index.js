const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__info');
const nameInput =  document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAddMe =  document.querySelector('.profile__about-me');

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAddMe.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAddMe.textContent = jobInput.value;
    popupClose();
}

openPopup.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
