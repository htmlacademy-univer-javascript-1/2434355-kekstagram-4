const getPhotos = () => fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => Promise.resolve(data))
  .catch(() => Promise.reject());

const sendPhotoForm = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  return fetch(
    'https://29.javascript.pages.academy/kekstagram',
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
