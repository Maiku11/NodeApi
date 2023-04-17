import express from 'express';
import { getAllUsers, addNewUser, special, findOne } from '../controllers/user.js';



const router = express.Router();

router.get('/all', getAllUsers);

router.post('/new', addNewUser);

router.get('/userId/special', special);


router.get('/userId/:id', findOne);

export default router;