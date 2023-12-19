import {photoDescriptions} from './data.js';

const pictureListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const descriptionsOfPictures = photoDescriptions();

const picturesListFragment = document.createDocumentFragment();

descriptionsOfPictures.forEach(({url, description, likes, comments}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img.').src = url;
  pictureElement.querySelector('.picture__img.').alt = description;
  pictureElement.querySelector('.picture__likes.').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(picturesListFragment);
