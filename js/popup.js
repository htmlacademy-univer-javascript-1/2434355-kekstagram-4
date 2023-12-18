import {createDescription} from './data.js';

const pictureListElement = document.querySelector('.pictures  container');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const descriptions = createDescription();

const picturesListFragment = document.createDocumentFragment();

descriptions.forEach(({url, description, likes, comments}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.src = url;
  pictureElement.alt = description;
  pictureElement.querySelector('.picture__likes.').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  picturesListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(picturesListFragment);
