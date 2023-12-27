const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const IMAGE_SCALE_STEP = 25;
const imgEdit = document.querySelector('.img-upload__overlay');
const imgPreview = imgEdit.querySelector('.img-upload__preview').children[0];
const scaleInput = imgEdit.querySelector('.scale__control--value');
const scaleButtonSmaller = imgEdit.querySelector('.scale__control--smaller');
const scaleButtonBigger = imgEdit.querySelector('.scale__control--bigger');
let scaleElement = MAX_SCALE_VALUE;

const changeImageScale = () => {
  imgPreview.style.transform = `scale(${scaleElement / 100})`;
};

const updateScale = () => {
  scaleInput.value = `${scaleElement}%`;
  changeImageScale();
};

const onDecreaseClick = () => {
  updateScale();
  if (scaleElement !== MIN_SCALE_VALUE) {
    scaleElement -= IMAGE_SCALE_STEP;
    updateScale();
  }

  updateScale();
};

const onIncreaseClick = () => {
  if (scaleElement !== MAX_SCALE_VALUE) {
    scaleElement += IMAGE_SCALE_STEP;
    updateScale();
  }
};

scaleButtonSmaller.addEventListener('click', onDecreaseClick);
scaleButtonBigger.addEventListener('click', onIncreaseClick);

export {updateScale, MAX_SCALE_VALUE};
