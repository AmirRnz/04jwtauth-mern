import generateToken from "../utils/jwtUtils";
import { comparePasswords } from "../lib/crypto";
import User from "../models/user";

export default async function login(email, password) {
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("user not found");
    }
    const isPasswordValid = await comparePasswords(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      throw new Error("password is not valid");
    }
    const token = generateToken(existingUser);
    return token;
  } catch (error) {
    throw new Error("invalid credentials");
  }
}
