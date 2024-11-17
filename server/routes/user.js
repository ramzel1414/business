import express from 'express';
import {authUser} from '../controllers/user.js';

const router = express.Router();

router.post('/api/auth', authUser)

export default router
