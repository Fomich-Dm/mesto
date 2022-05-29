export default class UserInfo {
  constructor({name, about, avatar}) {
    this._name = document.querySelector(name);
    this._profession = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return{
      name: this._name.textContent,
      about: this._profession.textContent
    };

  }

  setUserInfo({name, about, avatar}) {
    this._name.textContent = name;
    this._profession.textContent = about;
    this._avatar.src = avatar;
  }
}
