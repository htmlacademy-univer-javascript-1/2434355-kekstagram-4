import './form.js';
import {photoDescriptions} from './data.js';
import {renderPictures} from './pictures.js';
import {getPhotos} from './api.js';

getPhotos(renderPictures(photoDescriptions()));
