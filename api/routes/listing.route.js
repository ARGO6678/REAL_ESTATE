import express from 'express';
import { createListing,deleteListing,updateListing,getListing,getListings} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();


router.post('/create',verifyToken,createListing);
router.delete('/delete/:id',verifyToken,deleteListing);
router.post('/update/:id',verifyToken,updateListing);
router.get('/get/:id',getListing); // Here we are not verifying user as listings are open for all to see! User Who is registered is only allowed to create one!
router.get('/get',getListings); // This is made for searching in our website and since we are searching and result can be more than 1 listings, we donot pass id here
export default router;