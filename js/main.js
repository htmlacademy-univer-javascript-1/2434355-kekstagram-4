import './form.js';
import {getPhotos} from './api.js';
import {photoDescriptions} from './data.js';
import {renderPictures} from './pictures.js';

getPhotos(renderPictures(photoDescriptions()));
