const FILE_TYPES = ['.jpg', '.jpeg', '.png', 'gif'];

const selectPicture= (fileInput, imgPreview) => {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
};

export {selectPicture};
