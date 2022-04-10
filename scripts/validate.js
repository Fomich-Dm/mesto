// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorActive);
};


// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputError);
  errorElement.classList.remove(config.inputErrorActive);
  errorElement.textContent = '';
};




// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputForm));
  const buttonElement = formElement.querySelector(config.submitButton);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.form));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {

      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {


    return !inputElement.validity.valid;
  })
};


const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.submitButtonInactive);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.submitButtonInactive);
    buttonElement.disabled = false;
  }
};

enableValidation({
  inputError: 'popup__input_type_error',
  inputErrorActive: 'popup__input-error_active',
  inputForm: '.popup__input',
  submitButton: '.popup__button',
  form: '.popup__info',
  submitButtonInactive: 'popup__button_inactive',
});
