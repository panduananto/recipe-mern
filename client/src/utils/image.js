import Compress from 'compress.js';

const imageToBase64 = (event, callback) => {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    callback(reader.result);
  };
};

const imgCompress = (value) => {
  const compress = new Compress();
  const file = [...value];

  const compressedFile = compress
    .compress(file, {
      size: 0.3,
      quality: 0.8,
      maxHeight: 720,
      maxWidth: 1280,
      resize: true,
    })
    .then((data) => {
      const img = data[0];
      const compressedBase64 = img.prefix + img.data;

      return compressedBase64;
    });

  return compressedFile;
};

export { imageToBase64, imgCompress };
