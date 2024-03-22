import express from "express";
import dotenv from "dotenv";
dotenv.config({path:"configs/.env"});
import './db/connection.js';
import bodyParser from "body-parser";
import { error } from "./middlewares/error.middleware.js"

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT;

import authRoute from "./routes/auth.route.js";
import customerRoute from "./routes/customer.route.js";
import userRoute from "./routes/user.route.js";
import gymRoute from "./routes/gym.route.js";
import cookieParser from "cookie-parser";

app.use('/api/auth',authRoute);
app.use('/api/customer',customerRoute);
app.use('/api/gym', gymRoute);
app.use('/api/user', userRoute);

app.use(error);

app.listen(PORT,()=>{ console.log(`Server running on port ${PORT}`)})
