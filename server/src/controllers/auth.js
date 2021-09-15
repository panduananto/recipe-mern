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
