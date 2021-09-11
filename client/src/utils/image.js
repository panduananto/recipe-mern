import Compress from 'compress.js';

const imageToBase64 = (event, callback) => {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    callback(reader.result);
  };
};

const imgCompress = (event, callback) => {
  const compress = new Compress();
  const file = [...event.target.files];

  compress
    .compress(file, {
      size: 0.3,
      quality: 0.8,
      maxHeight: 720,
      maxWidth: 1280,
      resize: true,
    })
    .then((data) => {
      const compressedBase64 = data[0].prefix + data[0].data;

      callback(compressedBase64);
    });
};

export { imageToBase64, imgCompress };
