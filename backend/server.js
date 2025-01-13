import express          from "express";
import dotenv           from "dotenv";
import cookieParser     from "cookie-parser";
import authRoutes       from "./routes/auth.routes.js";
import messageRoutes    from "./routes/message.routes.js";
import userRoutes       from "./routes/user.routes.js";
import connectToMongoDb from "../database/connectToMongoDb.js";

const app  = express();

dotenv.config(); 

const PORT = process.env.PORT || 2005;

app.use(express.json()); //parse incoming requests with JSON payloads
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// app.get("/", (req, res) => {
//     res.send("Witaj Michu");
// }); 


app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server Running on port ${PORT}`);
});