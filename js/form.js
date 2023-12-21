import {commentInput, hashtagsInput, pristine} from './validation';

const imgUpload = document.querySelector('.img-upload');
const body = document.querySelector('body');
const imgUploadForm = imgUpload.querySelector('.img-upload__form');
const imgUploadInput = imgUpload.querySelector('.img-upload__input');
const imgUploadOverlay = imgUpload.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');

const isTextFocused = () =>
  document.activeElement === commentInput||
  document.activeElement === hashtagsInput;

const hideEditingForm = () => {
  imgUploadForm.reset();
  pristine.reset();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  //removeScaleButtons();
  //removeEffectsChoose();
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFocused()) {
    evt.preventDefault();
    hideEditingForm();
  }
}

const openEditingForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  //addScale();
  //addEffects();
};

const onCancelButtonClick = () => {
  hideEditingForm();
};

const onImgUploadClick = () => {
  openEditingForm();
};

const uploadFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

imgUploadInput.addEventListener('change', onImgUploadClick);
imgUploadCancel.addEventListener('click', onCancelButtonClick);
imgUploadForm.addEventListener('submit', uploadFormSubmit);
