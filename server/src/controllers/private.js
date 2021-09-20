export const getPrivateData = (req, res, next) => {
  res.status(200).json({
    data: 'You got access to private data',
  });
};
