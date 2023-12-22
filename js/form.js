import {pristine} from './validation.js';
import {hideSlider, initEffect, updateImgEffect, DEFAULT} from './effects.js';
import { updateScale } from './scale.js';


const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgEdit = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideEditingForm();
  }
}

const onCancelButtonClick = () => {
  hideEditingForm();
};

const openEditingForm = () => {
  body.classList.add('modal-open');
  imgEdit.classList.remove('hidden');

  initEffect(DEFAULT);
  updateScale();
  updateImgEffect();
  hideSlider();

  imgUploadCancel.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function hideEditingForm () {
  body.classList.remove('modal-open');
  imgEdit.classList.add('hidden');
  imgUploadForm.reset();
  imgUploadCancel.removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onImgUpload = () => {
  pristine.validate();
  openEditingForm();
};

imgUploadInput.addEventListener('change', onImgUpload);
