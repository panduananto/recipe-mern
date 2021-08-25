const imageToBase64 = (event, callback) => {
  let file = event.target.files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    callback(reader.result);
  };
};

export default imageToBase64;
