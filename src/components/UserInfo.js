export default class UserInfo {
  constructor({name, about, avatar}) {
    this._name = document.querySelector(name);
    this._profession = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._inputName = document.querySelector('.popup__input_type_name');
    this._inputProfession = document.querySelector('.popup__input_type_about');
  }

  getUserInfo() {
    return{
      name: this._inputName.value = this._name.textContent,
      about: this._inputProfession.value = this._profession.textContent
    };
  }

  setUserInfo({name, about, avatar}) {
    this._name.textContent = name;
    this._profession.textContent = about;
    this._avatar.src = avatar;
  }
}
