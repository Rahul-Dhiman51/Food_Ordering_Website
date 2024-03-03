import { Router } from "express";
import { sample_users } from "../data.js";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find((user) => (user.email === email && user.password === password))

    if (user) {
        res.send(generateTokenResponse(user));
        return;
    }

    res.status(BAD_REQUEST).send("Invalid email or password");
})


const generateTokenResponse = (user) => {
    // sign is used to create a token and pass the payload and secret
    //  key to it for verification at the frontend
    // Third argument is an object which contains the expiration time or options
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        'SomeRandomText',
        {
            expiresIn: '5d',
        }
    )

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    }
}

export default router;