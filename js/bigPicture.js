const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT =35;
const UPLOAD_COMMENTS_COUNT = 5;
const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const loadMoreComments = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentList = bigPicture.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
let shownCommentsCount = UPLOAD_COMMENTS_COUNT;
let currentComments = [];

const createCommentElement = function (comment) {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = AVATAR_WIDTH;
  commentAvatar.height = AVATAR_HEIGHT;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  newComment.append(commentAvatar);
  newComment.append(commentText);
  return newComment;
};

const renderComments = function () {
  const commentsListFragment = document.createDocumentFragment();


  if (currentComments.length < UPLOAD_COMMENTS_COUNT || shownCommentsCount >= currentComments.length) {
    shownCommentsCount = currentComments.length;
    loadMoreComments.classList.add('hidden');
  } else {
    loadMoreComments.classList.remove('hidden');
  }

  const newMessage = `${shownCommentsCount} из ${currentComments.length} комментариев`;
  commentsCount.textContent = newMessage;

  const startIndex = (shownCommentsCount <= UPLOAD_COMMENTS_COUNT) ? 0 : UPLOAD_COMMENTS_COUNT * Math.floor((shownCommentsCount - 1) / UPLOAD_COMMENTS_COUNT);

  for (let i = startIndex; i < shownCommentsCount; i++) {
    commentsListFragment.append(createCommentElement(currentComments[i]));
  }

  commentList.append(commentsListFragment);
};

const onLoadButtonClick = () => {
  shownCommentsCount += UPLOAD_COMMENTS_COUNT;
  renderComments();
};

const renderBigPicture = (picture) => {
  bigPictureImg.src = picture.url;
  bigPictureLikesCount.textContent = picture.likes;
  bigPictureDescription.textContent = picture.description;
  bigPictureCommentsCount.textContent = picture.comments.length;
};

const closeBigPicture = function () {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  closeButton.removeEventListener('click', closeBigPicture);
  document.addEventListener('keydown', isEscapeKey);
  loadMoreComments.removeEventListener('click', onLoadButtonClick);
};

function isEscapeKey (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = (picture) => {
  commentList.innerHTML = '';
  shownCommentsCount = UPLOAD_COMMENTS_COUNT;
  currentComments = picture.comments;
  renderBigPicture(picture);
  renderComments(picture.comments);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  loadMoreComments.addEventListener('click', onLoadButtonClick);
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', isEscapeKey);
};

export{openBigPicture};
