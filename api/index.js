import express from 'express'
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();



mongoose.connect(process.env.MONGODB_ATLAS).then(() => {
    console.log('Connected to MongoDB');
}).catch ((err) => {
    console.log(err);
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})