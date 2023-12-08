require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
// const corsOptions = {
//   origin: "https://bulk-sms-23yv.onrender.com",
// };
// middleware

app.use(express.json());
app.use(cors());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const Auth = require("./routes/Auth");
const Note = require("./routes/Note");

const port = process.env.port || 3000;
const connectDB = require("./connect");
const { urlencoded } = require("express");

// routes
app.use("/api/v1/auth/", Auth);
app.use("/api/v1/note/", Note);

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, function () {
    console.log("Server is running on port " + port);
  });
};
start();
