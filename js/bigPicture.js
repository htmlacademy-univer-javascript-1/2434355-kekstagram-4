const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT =35;
const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const loadMoreComments = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentList = bigPicture.querySelector('.social__comments');
let commentsDisplayed;
let shownCommentsCount;
let currentComments;

const createCommentElement = function (comment) {
  const commentContainer = document.createElement('li');
  commentContainer.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = AVATAR_WIDTH;
  commentAvatar.height = AVATAR_HEIGHT;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;

  commentContainer.append(commentAvatar);
  commentContainer.append(commentText);
  return commentContainer;
};

const showCommentLoadButton = () => {
  loadMoreComments.classList.remove('hidden');
};

const hideCommentLoadButton = () => {
  loadMoreComments.classList.add('hidden');
};

const showComments = (commentListElement) => {
  shownCommentsCount = Math.min(shownCommentsCount + 5, commentListElement.length);
  commentsDisplayed += 5;

  const commentsToShow = commentListElement.slice(commentsDisplayed, shownCommentsCount);

  if (commentsToShow) {
    commentsToShow.forEach((comment) => {
      commentList.append(createCommentElement(comment));
      commentsCount.textContent = `${shownCommentsCount} из ${commentListElement.length} комментариев`;
    });
  }

  if (shownCommentsCount === commentListElement.length) {
    hideCommentLoadButton();
    commentsDisplayed = 0;
  }
};

function showNextComments() {
  showComments(currentComments);
}

const renderComments = function (comments) {
  commentsDisplayed = -5;
  shownCommentsCount = 0;
  currentComments = comments;
  const totalCommentsCount = comments.length;
  commentList.innerHTML = '';

  if (totalCommentsCount <= 5) {
    shownCommentsCount = totalCommentsCount;
    hideCommentLoadButton();
  }
  else {
    showCommentLoadButton();
    commentsCount.classList.remove('hidden');
    loadMoreComments.addEventListener('click', showNextComments);
  }
  const newMessage = `${shownCommentsCount} из ${totalCommentsCount} комментариев`;
  commentsCount.textContent = newMessage;
  commentList.append(showComments(comments));
};

const renderBigPicture = (picture) => {
  bigPictureImg.src = picture.url;
  bigPictureLikesCount.textContent = picture.likes;
  bigPictureDescription.textContent = picture.description;
  bigPictureCommentsCount.textContent = picture.comments.length;
};

const removeLoadButtonEvent = () => loadMoreComments.removeEventListener('click', showNextComments);

const closeBigPicture = function () {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.querySelector('.big-picture__cancel').removeEventListener('click', closeBigPicture);
  document.addEventListener('keydown', isEscapeKey);
  removeLoadButtonEvent();
};

function isEscapeKey (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

const openBigPicture = (picture) => {
  renderBigPicture(picture);
  renderComments(picture.comments);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.querySelector('.big-picture__cancel').addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', isEscapeKey);
};

export{openBigPicture};
