const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__info');
const nameInput =  document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__about-me');
const profileName = document.querySelector('.profile__name');
const profileAddMe =  document.querySelector('.profile__about-me');

function togglePopup() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAddMe.textContent;
}


function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAddMe.textContent = jobInput.value;
    togglePopup();
}

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);
