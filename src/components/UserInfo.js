export default class UserInfo {
  constructor({name, profession}) {
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
    this._inputName = document.querySelector('.popup__input_type_name');
    this._inputProfession = document.querySelector('.popup__input_type_about');
  }

  getUserInfo() {
    return{
      name: this._inputName.value = this._name.textContent,
      profession: this._inputProfession.value = this._profession.textContent
    };
  }

  setUserInfo({name, profession}) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}
