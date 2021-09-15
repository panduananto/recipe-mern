import User from '../models/user.js';

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });

  try {
    await user.save();

    res.status(201).json(user);
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

    res.status(200).json({ token: 'JWT goes here' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
