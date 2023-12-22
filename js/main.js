import './form.js';
import {getPhotos} from './api.js';
import {showFilter, hideFilters, filterPictures} from './filters.js';
import {closeMessage, showServerError } from './service-messages.js';

getPhotos()
  .then((data) => {
    filterPictures(data);
    closeMessage();
    showFilter();
  })
  .catch(() => {
    hideFilters();
    showServerError();
  });
