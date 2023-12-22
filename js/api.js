import {showServerError, closeMessage, showUploadError, showSuccessUpload} from './service-messages.js';

const getPhotos = (renderPictures) => {
  fetch('https://29.javascript.pages.academy/kekstagram/data')
    .then((resolve) => {
      closeMessage();
      return resolve.json();
    })
    .then((data) => renderPictures(data))
    .catch(() => showServerError());
};

const sendPhotoForm = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(
    'https://29.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData
    })
    .then((resolve) => {
      if (resolve.ok) {
        showSuccessUpload();
      } else {
        throw new Error();
      }
    })
    .catch(() => {
      showUploadError();
    });
};

export {getPhotos, sendPhotoForm};
