import express from 'express';
import { createUser,getuserBYEmail,RefreshToken} from '../controllers/user.controller.js';  
const router = express.Router();
router.post('/', createUser);
router.post('/refreshToken/',RefreshToken);
router.post('/login', getuserBYEmail);
export default router;