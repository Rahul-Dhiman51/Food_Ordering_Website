import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import { dbconnect } from './config/database.config.js';

dotenv.config()

dbconnect();

const app = express();
app.use(express.json());

const PORT = 3000

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use('/api/foods', foodRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})