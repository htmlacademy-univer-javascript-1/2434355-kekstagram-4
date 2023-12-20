const IMG_WIDTH = 35;
const IMG_HEIGHT = 35;
const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');

const createCommentElement = function (comment) {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comments');

  const commentImg = document.createElement('img');
  commentImg.classList.add('social__picture');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentImg.width = IMG_WIDTH;
  commentImg.height = IMG_HEIGHT;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentElement.append(commentImg);
  commentElement.append(commentText);

  return commentElement;
};

const renderComments = function (comments) {
  const commentListFragment = document.createDocumentFragment();
  document.querySelector('.social__comments').innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentListFragment.append(commentElement);
  });

  bigPicture.querySelector('.social__comments').append(commentListFragment);
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

const renderBigPicture = (picture) => {
  bigPictureImg.src = picture.url;
  bigPictureLikesCount.textContent = picture.likes;
  bigPictureDescription.textContent = picture.description;
  bigPictureCommentsCount.textContent = picture.comments.length;
};

const closeBigPicture = function () {
  document.querySelector('body').classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.querySelector('.big-picture__cancel').removeEventListener('click', closeBigPicture);
};

const isEscapeKey = function(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

const openBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  renderBigPicture(picture);
  renderComments(picture.comments);

  document.addEventListener('keydown', isEscapeKey);
  document.querySelector('.big-picture__cancel').addEventListener('click', closeBigPicture);
};

export{openBigPicture};
