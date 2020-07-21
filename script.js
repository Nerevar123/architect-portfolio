const formElement = document.querySelector('.form');
const formName = document.querySelector('.form__field_type_text');
const formMail = document.querySelector('.form__field_type_email');
const formTitle = document.querySelector('.form__field_type_title');
const formText = document.querySelector('.form__field_type_textarea');

function formSubmitHandler (evt) {
  evt.preventDefault();
  alert('Thank you');
  formName.value = '';
  formMail.value = '';
  formTitle.value = '';
  formText.value = '';
}

formElement.addEventListener('submit', formSubmitHandler);
