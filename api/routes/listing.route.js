import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

// Only create a new listing if user is verified
router.post('/create', verifyToken, createListing);

export default router;