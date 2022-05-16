export default class Section {
  constructor({item, renderer}, containerSelector) {
    this._initialArray = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItem() {
    this._initialArray.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
