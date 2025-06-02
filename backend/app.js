import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/config/mongo.config.js";
import short_url_route from "./src/routes/shortUrl.route.js" 
import redirectRoute from "./src/routes/redirect.route.js";
import errorHandler from "./src/utils/errorHandler.js";
import authRoute from "./src/routes/auth.route.js"

import cors from "cors";


dotenv.config("./.env");

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hum app ko bol rhe ki aap use karo or jb use karo udhr jo funcion uudhr aao

// 


app.use("/api/auth", authRoute)
app.use("/api/create",short_url_route)
app.use("/api",redirectRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  });

app.use(errorHandler)


app.listen(3000, () => {
  connectDb();
  console.log("The code is running on port 3000");
});
