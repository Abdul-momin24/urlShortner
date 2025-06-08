import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import express from "express";
import connectDb from "./src/config/mongo.config.js";
import authRoute from "./src/routes/auth.route.js";
import redirectRoute from "./src/routes/redirect.route.js";
import short_url_route from "./src/routes/shortUrl.route.js";
import getUserUrls from "./src/routes/user.route.js";
import errorHandler from "./src/utils/errorHandler.js";

import cors from "cors";
import attachUser from "./src/utils/attachUser.js";


dotenv.config("./.env");

const app = express();

app.use(cors({
  origin: "https://url-shortner-z4yr.vercel.app", // Use your frontend URL in production
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hum app ko bol rhe ki aap use karo or jb use karo udhr jo funcion uudhr aao

// 

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({
    activeStatus: "Server is running",
    message: "Welcome to the URL Shortener API",
    error:false,
  });
});

app.use(cookieParser());

app.use("/",redirectRoute);
app.use(attachUser);
app.use("/api/auth", authRoute)
app.use("/api/create",short_url_route)
app.use("/api/user",getUserUrls)

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  });

app.use(errorHandler)


app.listen(port, () => {
  connectDb();
  console.log("The code is running on port 3000");
});
