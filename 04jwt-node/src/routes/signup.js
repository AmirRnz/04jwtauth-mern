import express from "express";
import signupController from "../controllers/signup.js";

const router = express.Router();
router.post("/register", (req, res) => {
  signupController(req, res);
});
export default router;
