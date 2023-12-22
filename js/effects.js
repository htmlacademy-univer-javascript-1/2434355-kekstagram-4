const DEFAULT = {
  style: {
    filter: '',
    unit: ''
  },
};

const EFFECTS = {
  chrome: {
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    }
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },
  heat: {
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

const imgPreview = document.querySelector('.img-upload__preview').children[0];
const uploadEffect = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const effectNone = document.querySelector('#effect-none');
const chromeEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const marvinEffect = document.querySelector('#effect-marvin');
const phobosEffect = document.querySelector('#effect-phobos');
const heatEffect = document.querySelector('#effect-heat');

let effectElement = EFFECTS.DEFAULT;

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const openSlider = () => {
  uploadEffect.classList.remove('hidden');
};

const hideSlider = () => {
  uploadEffect.classList.add('hidden');
};

const updateImgEffect = () => {
  if (effectElement === EFFECTS.DEFAULT) {
    imgPreview.style.filter = '';
  } else {
    imgPreview.style.filter = `${effectElement.filter}(${slider.noUiSlider.get()}${effectElement.unit})`;
  }
};

hideSlider();

const initEffect = (effect) => {
  effectElement = effect;
};

effectNone.addEventListener('click', () => {
  effectNone.checked = true;
  effectValue.value = '';
  hideSlider();
  initEffect(EFFECTS.DEFAULT);
  updateImgEffect();
});

chromeEffect.addEventListener('click', () => {
  slider.noUiSlider.updateOptions(EFFECTS.chrome);
  chromeEffect.checked = true;
  openSlider();
  initEffect(EFFECTS.chrome);
  updateImgEffect();
});

sepiaEffect.addEventListener('click', () => {
  slider.noUiSlider.updateOptions(EFFECTS.sepia);
  sepiaEffect.checked = true;
  openSlider();
  initEffect(EFFECTS.sepia);
  updateImgEffect();
});

marvinEffect.addEventListener('click', () => {
  slider.noUiSlider.updateOptions(EFFECTS.marvin);
  marvinEffect.checked = true;
  openSlider();
  initEffect(EFFECTS.marvin);
  updateImgEffect();
});

phobosEffect.addEventListener('click', () => {
  slider.noUiSlider.updateOptions(EFFECTS.phobos);
  phobosEffect.checked = true;
  openSlider();
  initEffect(EFFECTS.phobos);
  updateImgEffect();
});

heatEffect.addEventListener('click', () => {
  slider.noUiSlider.updateOptions(EFFECTS.heat);
  heatEffect.checked = true;
  openSlider();
  initEffect(EFFECTS.heat);
  updateImgEffect();
});

slider.noUiSlider.on('update', () => {
  effectValue.value = slider.noUiSlider.get();
  updateImgEffect();
});

export { hideSlider, initEffect, updateImgEffect, DEFAULT};
