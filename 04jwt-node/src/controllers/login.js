import authService from "../services/login";

export default async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await authService(email, password);
    res.json({ token: token });
  } catch (error) {
    res.status(401).json({ message: "invalid credentials" });
  }
}
