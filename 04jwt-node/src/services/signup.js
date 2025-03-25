import user from "../models/user";
import { hashPassword } from "../lib/crypto";

const createUser = async (userData) => {
  const { name, email, password } = userData;
  const hashedPassword = await hashPassword(password);
  const createdUser = new User({
    name,
    email,
    hashedPassword,
    role: "customer",
  });
  const savedUser = await createdUser.save();
  return savedUser;
};

export default createUser;
