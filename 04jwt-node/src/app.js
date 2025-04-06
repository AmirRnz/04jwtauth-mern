import express from "express";
import signupRoute from "./routes/signup.js";
import bodyParser from "body-parser";
import cors from "cors";
import createAdminAccount from "./scripts/admin.js";
import loginRoute from "./routes/login.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173", // or wherever your frontend runs
    credentials: true,
  })
);
createAdminAccount();
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
