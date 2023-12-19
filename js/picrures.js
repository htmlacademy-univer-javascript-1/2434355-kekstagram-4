import {createDescription} from './data.js';

const pictureListElement = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const descriptionsOfPictures = createDescription();

const picturesListFragment = document.createDocumentFragment();

descriptionsOfPictures.array.forEach(({url, description, likes, comments}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img.').src = url;
  pictureElement.querySelector('.picture__img.').alt = description;
  pictureElement.querySelector('.picture__likes.').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(picturesListFragment);
