import express from "express";
import signupRoute from "./routes/signup.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", signupRoute);

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
