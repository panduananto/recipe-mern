import express from 'express';

import { protect } from '../middlewares/auth.js';
import { getPrivateData } from '../controllers/private.js';

const router = express.Router();

router.get('/', protect, getPrivateData);

export default router;
