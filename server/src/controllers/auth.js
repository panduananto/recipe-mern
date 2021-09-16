import User from '../models/user.js';

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });

  try {
    await user.save();

    sendToken(user, 201, res);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Please do not leave the email or password empty' });
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      res.status(404).json({ message: 'User does not exists' });
    }

    const isMatchPassword = await user.matchPassword(password);

    if (!isMatchPassword) {
      res.status(404).json({ message: 'Your password is incorrect' });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ token });
};
