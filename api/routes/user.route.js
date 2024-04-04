import express from 'express'
import { test, updateUser, deleteUser, getUserListings, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
// Get all the listings of a user 
router.get('/listings/:id', verifyToken, getUserListings)
// for sending the message to the owner
router.get('/:id', verifyToken, getUser)

export default router;