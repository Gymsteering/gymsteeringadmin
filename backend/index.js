import express from "express";
import dotenv from "dotenv";
dotenv.config({path:"configs/.env"});
import './db/connection.js';
import bodyParser from "body-parser";
import { error } from "./middlewares/error.middleware.js"

const app = express();

app.use(bodyParser.json())

const PORT = process.env.PORT;

import auth from "./routes/auth.route.js"

app.use('/api/auth',auth);

app.use(error);

app.listen(PORT,()=>{ console.log(`Server running on port ${PORT}`)})
