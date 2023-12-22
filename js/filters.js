import {getRandomArrayElementsInAmount, debounce} from './util.js';
import {renderPictures, clearPictures} from './pictures.js';

const RANDOM_PICTURE_AMOUNT = 10;
const ACTIVE_FILTER = 'img-filters__button--active';
const filters = document.querySelector('.img-filters');
const filtersForm = filters.querySelector('.img-filters__form');
let picturesWithFilter = [];

const sortByMostDiscussed = (items) => items.sort((photoFirst, photoSecond) => photoSecond.comments.length - photoFirst.comments.length);
const showFilter = () => filters.classList.remove('img-filters--inactive');
const hideFilters = () => filters.classList.add('img-filters--inactive');
const changeFilter = (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    const currentFilter = filtersForm.querySelector(`.${ACTIVE_FILTER}`);
    currentFilter.classList.remove(ACTIVE_FILTER);
    evt.target.classList.add(ACTIVE_FILTER);
  }
};

const filterPictures = (pictures) => {
  picturesWithFilter = pictures;
  renderPictures(pictures);
};

const initFilters = {
  'filter-default': () => renderPictures(picturesWithFilter),
  'filter-random': () => renderPictures(getRandomArrayElementsInAmount(picturesWithFilter, RANDOM_PICTURE_AMOUNT)),
  'filter-discussed': () => renderPictures(sortByMostDiscussed(picturesWithFilter.slice()))
};

const onFiltersClick = debounce((evt) => {
  if (evt.target.tagName === 'BUTTON') {
    clearPictures();
    initFilters[evt.target.id]();
  }
});

filtersForm.addEventListener('click', onFiltersClick);
filtersForm.addEventListener('click', changeFilter);

export {showFilter, hideFilters, filterPictures};

