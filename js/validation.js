const HASHTAGS_MAX_COUNT = 5;
const HASHTAGS_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const imgUploadForm = () => document.querySelector('.img-upload__form');
const uploadPhotoButton = document.querySelector('.img-upload__submit');
const commentInput = document.querySelector('.text__description');
const hashtagsInput = document.querySelector('.text__hashtags');
let error = '';

const pristine = new Pristine(imgUploadForm(), {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-message'
});

const checkValidation = () => {
  if (!pristine.validate()) {
    uploadPhotoButton.setAttribute('disabled', '');
  } else {
    uploadPhotoButton.removeAttribute('disabled');
  }
};

const isCommentValid = () => {
  if (commentInput.length <= COMMENT_MAX_LENGTH){
    error = `Количество символов не должно превышать ${COMMENT_MAX_LENGTH}`;
  }
};

const areHashtagsValid = (value) => {
  const hashtags = value
    .split(' ')
    .filter((tag) => tag !== '')
    .map((tag) => tag.toLowerCase());

  if (hashtags.length > HASHTAGS_MAX_COUNT) {
    error = `количество хэштегов не должно превышать ${HASHTAGS_MAX_COUNT}`;
    return false;
  }

  for (const hashtag of hashtags) {
    if (!VALID_HASHTAG.test(hashtag)) {
      if (hashtag[0] !== '#') {
        error = 'Хэштег должен начинаться c #';
      } else if (hashtag.length === 1) {
        error = '';
      } else if (hashtag.length > HASHTAGS_MAX_LENGTH) {
        error = `Хэштег должен быть не длиннее ${HASHTAGS_MAX_LENGTH} символов`;
      } else {
        error = 'Использованы недопустимые символы';
      }
      return false;
    }
  }

  if (hashtags.some((tag) => hashtags.indexOf(tag) !== hashtags.lastIndexOf(tag))) {
    error = 'Хэштеги не должны повторяться';
    return false;
  }

  return true;
};

const errorMessage = () => error;

const onHashtagInput = () => {
  checkValidation();
};

const onCommentInput = () => {
  checkValidation();
};

pristine.addValidator(hashtagsInput, areHashtagsValid, errorMessage);
pristine.addValidator(commentInput, isCommentValid, errorMessage);

hashtagsInput.addEventListener('input', onHashtagInput);
hashtagsInput.addEventListener('keydown', (evt) => evt.stopPropagation());

commentInput.addEventListener('input', onCommentInput);
commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

export {pristine};
