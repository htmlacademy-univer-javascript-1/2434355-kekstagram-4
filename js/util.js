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

const getRandomArrayElementsInAmount = (list, amount) => {
  const randomPictures = [];
  for (let i = 0; i < amount; i++) {
    let randomPicture = getRandomArrayElement(list);
    while (randomPictures.includes(randomPicture)) {
      randomPicture = getRandomArrayElement(list);
    }
    randomPictures.push(randomPicture);
  }
  return randomPictures;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomArrayElement, createRandomUniqueNumber, getRandomInteger, debounce, getRandomArrayElementsInAmount};

