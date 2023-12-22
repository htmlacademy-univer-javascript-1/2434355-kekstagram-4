import {openEditingForm, hideEditingForm} from './form.js';

const serverErrorTemplate = document.querySelector('#server_error').content.querySelector('.server_error');
const uploadErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadSuccessTemplate = document.querySelector('#success').content.querySelector('.success');

const closeMessage = () => {
  document.body.removeChild(document.body.lastChild);
};

const onSuccessCloseClick = () => {
  closeMessage();
};

const onErrorEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessage();
    openEditingForm();
  }
};

const onErrorCloseClick = () => {
  closeMessage();
  openEditingForm();
};

const onSuccessEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessage();
  }
};

const showServerError = () => {
  const message = serverErrorTemplate.cloneNode(true);
  document.body.insertAdjacentElement('beforeend', message);
};

const showUploadError = () => {
  const message = uploadErrorTemplate.cloneNode(true);
  const messageInner = message.querySelector('.error__inner');
  const messageCloseButton = message.querySelector('.error__button');

  hideEditingForm(false);

  messageInner.addEventListener('click', (evt) => evt.stopPropagation());
  message.addEventListener('click', onErrorCloseClick);
  messageCloseButton.addEventListener('click', onErrorCloseClick);
  document.addEventListener('keydown', onErrorEscKeydown);
  document.body.insertAdjacentElement('beforeend', message);
};

const showSuccessUpload = () => {
  const message = uploadSuccessTemplate.cloneNode(true);
  const messageInner = message.querySelector('.success__inner');
  const messageCloseButton = message.querySelector('.success__button');

  hideEditingForm();

  messageInner.addEventListener('click', (evt) => evt.stopPropagation());
  message.addEventListener('click', onSuccessCloseClick);
  messageCloseButton.addEventListener('click', onSuccessCloseClick);
  document.addEventListener('keydown', onSuccessEscKeydown);
  document.body.insertAdjacentElement('beforeend', message);
};

export {showServerError, closeMessage, showUploadError, showSuccessUpload};
