import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';

const app = express();
app.use(express.json());

const PORT = 3000

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use('/api/foods', foodRouter)
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})