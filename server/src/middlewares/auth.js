import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    res.status(401).json({ message: 'You are not authorized to access this page' });
  }

  try {
    const decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedJWT.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'You are not authorized to access this page' });
  }
};
