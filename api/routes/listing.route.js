import express from 'express';
import { createListing, deleteListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

// Only create a new listing if user is verified
router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);

export default router;