// Mostly same like user-->
import express from 'express';
import { signup,signin, google, signOut} from '../controllers/authentication.controller.js';
const router = express.Router(); 

router.post("/signup",signup); // will pass information to DB for storing it!
router.post("/signin",signin);
router.post("/google",google);
router.get('/signout',signOut);
export default router;