import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';


dotenv.config();
const app = express();



mongoose.connect(process.env.MONGODB_ATLAS).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})



app.use(express.json());
app.use(cookieParser());



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/listing', listingRouter);


// Middleware for sending errors
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        // statusCode: statusCode, 
        statusCode, //when both key and value are same one can be removed
        message 
    })
})