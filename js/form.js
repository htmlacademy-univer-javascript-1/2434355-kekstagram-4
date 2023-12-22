import {pristine} from './validation.js';
import {hideSlider, initEffect, updateImgEffect, DEFAULT} from './effects.js';
import {updateScale} from './scale.js';
import {sendPhotoForm} from './api.js';
const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgEdit = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');

imgUploadForm.addEventListener('submit', sendPhotoForm);

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideEditingForm();
  }
}

const clearForm = () => {
  imgUploadForm.reset();
  initEffect(DEFAULT);
  updateScale();
  updateImgEffect();
  hideSlider();
};


const onCancelButtonClick = () => {
  hideEditingForm();
};

const openEditingForm = () => {
  body.classList.add('modal-open');
  imgEdit.classList.remove('hidden');
  imgUploadCancel.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function hideEditingForm (clear = true) {
  body.classList.remove('modal-open');
  imgEdit.classList.add('hidden');

  if (clear) {
    clearForm();
  }

  imgUploadCancel.removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onImgUpload = () => {
  pristine.validate();
  openEditingForm();
};

imgUploadInput.addEventListener('change', onImgUpload);
document.removeEventListener('keydown', onDocumentKeydown);

export {openEditingForm, hideEditingForm};
