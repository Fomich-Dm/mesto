const cards = document.querySelector('.cards');
const cardsForm = document.querySelector('.popup__info_add');

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');

const imgPopup = document.querySelector('.popup__img');
const placeTitle =  document.querySelector('.popup__title-place');


const openPopupEdit = document.querySelector('.profile__edit-button');
const openPopupAdd = document.querySelector('.profile__add-button');

const closePopupEdit = document.querySelector('.popup__close_edit');
const closePopupAdd = document.querySelector('.popup__close_add');
const closePopupImage = document.querySelector('.popup__close_image');

const formProfileElement = document.querySelector('.popup__info_edit');
const nameInput =  document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAddMe =  document.querySelector('.profile__about-me');
const titlePopupImg = document.querySelector('.popup__title_place');


function popupToggle(item) {
  item.classList.toggle('popup_opened');
}


function profileInfo() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileAddMe.textContent;
}

function submitProfileForm (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAddMe.textContent = jobInput.value;


    popupToggle(popupEdit);
}

function getImgPopup(card) {
  imgPopup.src = card.link;
  imgPopup.alt = card.name;
  placeTitle.textContent = card.name;
  popupToggle(popupImage);
}

function renderCard(card) {


  const data = createCard(card);
  cards.prepend(data);
}


function createCard(initialCards) {
  const card = document.querySelector('.cards-template').content.cloneNode(true);

  card.querySelector('.cards__name').textContent = initialCards.name;
  card.querySelector('.cards__image').src = initialCards.link;
  card.querySelector('.cards__image').addEventListener('click', () => getImgPopup(initialCards));






  setCardActionsListeners(card);
  return card;
}

function addCard(event) {
  event.preventDefault();


  const newNameCard = event.currentTarget.querySelector('.popup__input_type_place').value;
  const newImageCard = event.currentTarget.querySelector('.popup__input_type_image').value;
  const newCard = {name : newNameCard, link : newImageCard};


  renderCard(newCard);
  popupToggle(popupAdd);
  cardsForm.reset();
}

function removeCard(event) {
  const card = event.currentTarget.closest('.cards__item');

  card.remove();
}

function cardsLike(event) {
  event.currentTarget.classList.toggle('cards__like_active');
}


function setCardActionsListeners(card) {
  card.querySelector('.cards__delete').addEventListener('click', removeCard);
  card.querySelector('.cards__like').addEventListener('click', cardsLike);
}

initialCards.map(createCard);
initialCards.map(renderCard);



openPopupEdit.addEventListener('click', function() {
  popupToggle(popupEdit)
  profileInfo()
});
openPopupAdd.addEventListener('click', function() {
  popupToggle(popupAdd)
});

closePopupEdit.addEventListener('click', function() {
  popupToggle(popupEdit)
});
closePopupAdd.addEventListener('click', function() {
  popupToggle(popupAdd)
});
closePopupImage.addEventListener('click', function(){
  popupToggle(popupImage)
})

formProfileElement.addEventListener('submit', submitProfileForm);
cardsForm.addEventListener('submit', addCard);
