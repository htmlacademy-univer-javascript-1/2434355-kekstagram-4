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

const PHOTO_DESCRIPTION_COUNT = 25;
const ID_COUNT = 1000;
const AVATAR_COUNT = 6;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function createRandomUniqueNumber(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateId1 = createRandomUniqueNumber(1, PHOTO_DESCRIPTION_COUNT);
const generatePhoto = createRandomUniqueNumber(1, PHOTO_DESCRIPTION_COUNT);
const generateId2 = createRandomUniqueNumber(1, ID_COUNT);
const generateAvatar = getRandomInteger(1, AVATAR_COUNT);
const str1 = 'img/avatar-';
const str2 = String(generateAvatar());
const str3 = '.svg';
const avatar = str1 + str2 + str3;
const str4 = 'photos/';
const str5 = generatePhoto();
const str6 = '.svg';
const photo = str4 + str5 + str6;

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
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const photoDescriptins = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createDescription);

console.log(photoDescriptins);
