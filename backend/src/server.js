import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
import { dbconnect } from './config/database.config.js';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path';

dotenv.config()

dbconnect();

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use('/api/foods', foodRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

const publicFolder = path.join(__dirname, 'public')
app.use(express.static(publicFolder))

app.get('*', (req, res) => {
    const indexFilePath = path.join(publicFolder, 'index.html')
    res.sendFile(indexFilePath)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})