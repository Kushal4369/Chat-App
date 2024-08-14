import express from "express"
import dotenv from "dotenv"

const app = express();

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.use(express.json());    //parse the requests with JSON payloads (req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () =>{
connectToMongoDB();
console.log(`Server running on ${PORT}`)

});
