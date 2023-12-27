const GET_PHOTOS_LINK = 'https://29.javascript.pages.academy/kekstagram/data';
const SEND_PHOTOS_LINK = 'https://29.javascript.pages.academy/kekstagram';

const getPhotos = () => fetch(GET_PHOTOS_LINK)
  .then((response) => response.json())
  .then((data) => Promise.resolve(data))
  .catch(() => Promise.reject());

const sendPhotoForm = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  return fetch(
    SEND_PHOTOS_LINK,
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        return Promise.resolve();
      }
      throw new Error();
    })
    .catch(() => Promise.reject());
};

export {getPhotos, sendPhotoForm};
