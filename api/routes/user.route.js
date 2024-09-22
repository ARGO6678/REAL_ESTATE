// To create routing we use express
import express from 'express';
import {test, updateUser,deleteUser,getUserListings,getUser} from '../controllers/user.controller.js'; // Have to add .js after default file path else it will give error!
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router(); // using this we can create our router!

router.get('/test',test);
router.post('/update/:id',verifyToken,updateUser); // For updating user and ID is also passed to know which user is interacting!
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/listings/:id',verifyToken,getUserListings);
router.get('/:id',verifyToken,getUser);
export default router;