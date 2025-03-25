import createUserService from "../services/signup.js";

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUserService(userData);
    res.status(201).json({ user: user, message: "user created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export default createUser;
