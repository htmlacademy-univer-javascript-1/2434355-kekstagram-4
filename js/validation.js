const HASHTAGS_MAX_COUNT = 5;
const HASHTAGS_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;

const imgUploadForm = () => document.querySelector('.img-upload__form');
const hashtagsInput = () => document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const uploadPhotoButton = document.querySelector('.img-upload__submit');

const validSymbolsOfhashtag = /^#[a-zа-яё0-9]{1,19}$/i;
let hashtags = hashtagsInput.value.toLowerCase().split(' ');

const pristine = new Pristine(imgUploadForm(), {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-message'
});

const isValidRepeats = () => (new Set(hashtags)).size === hashtags.length;

const isValidQuantity = () => hashtags.length <= HASHTAGS_MAX_COUNT;

const isValidSymbols = () => hashtags.every((el) => validSymbolsOfhashtag.test(el)) || commentInput.value === '';

const areHashtagsValid = () => {
  hashtags = hashtagsInput().value.toLowerCase().split(' ');
  for (const hashtag of hashtags) {
    if (hashtag.length > HASHTAGS_MAX_LENGTH) {
      return false;
    }
  }
  return isValidRepeats() && isValidQuantity() && isValidSymbols();
};

const isCommentValid = () => (commentInput.length <= COMMENT_MAX_LENGTH);

const hashtagErrorMessage = () => {
  if (!isValidRepeats()) {
    return 'Неправильно заполнены хэштеги: есть повторяющиеся';
  }
  if (!isValidQuantity()){
    return `Неправильно заполнены хэштеги: максимальное количество хэштегов: ${HASHTAGS_MAX_COUNT}`;
  }
  if (!isValidSymbols()) {
    return 'Неправильно заполнены хэштеги: использованы недопустимые символы';
  }
};

const commentsErrowMessage = () => {
  if (!isCommentValid()){
    return `Количество символов не должно превышать ${COMMENT_MAX_LENGTH}`;
  }
};

pristine.addValidator(hashtagsInput, areHashtagsValid, hashtagErrorMessage);
pristine.addValidator(commentInput, isCommentValid, commentsErrowMessage);

const checkValidation = () => {
  if (!pristine.validate()) {
    uploadPhotoButton.setAttribute('disabled', '');
  } else {
    uploadPhotoButton.removeAttribute('disabled');
  }
};

const onCommentInput = () => {
  checkValidation();
};

const onHashtagInput = () => {
  checkValidation();
};

hashtagsInput.addEventListener('input', onHashtagInput);
hashtagsInput.addEventListener('keydown', (evt) => evt.stopPropagation());

commentInput.addEventListener('input', onCommentInput);
commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

export {commentInput, hashtagsInput, pristine};
