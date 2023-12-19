import {getRandomArrayElement, createRandomUniqueNumber, getRandomInteger} from './util.js';

const DESCRIPTION = [
  'Отдых',
  'Веселье',
  'Класс',
  'Работа',
  'Здоровье',
  'Спорт',
  'Красота'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Иван',
  'Дмитрий',
  'Мария',
  'Андрей',
  'Виктор',
  'Юлия',
  'Анна',
  'Екатерина',
];

const FIRST_ID = 1;
const PHOTO_DESCRIPTION_COUNT = 25;
const ID_COUNT = 1000;
const AVATAR_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MIN_COUNT = 0;
const COMMENTS_MAX_COUNT = 30;

const generateId1 = createRandomUniqueNumber(FIRST_ID, PHOTO_DESCRIPTION_COUNT);
const generatePhoto = createRandomUniqueNumber(1, PHOTO_DESCRIPTION_COUNT);
const generateId2 = createRandomUniqueNumber(FIRST_ID, ID_COUNT);
const generateAvatar = getRandomInteger(1, AVATAR_COUNT);
const avatar = `img/avatar-${generateAvatar.svg}`;
const photo = `photos/${generatePhoto.svg}`;

const createComment = () => ({
  id: generateId2,
  avatar: avatar,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME)
});

const createDescription = () => ({
  id: generateId1(),
  url: photo,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT)}, createComment)
});

const photoDescriptions = function () {
  return Array.from({length: PHOTO_DESCRIPTION_COUNT}, createDescription);
};

export {photoDescriptions};
