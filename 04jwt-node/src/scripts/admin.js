import User from "../models/user";
import hashPassword from "../lib/crypto";

async function createAdminAccount() {
  try {
    const existingAdmin = await User.findOne({ email: "admin@test.com" });
    if (!existingAdmin) {
      const password = "mySecurePassword";
      const hashedPassword = await hashPassword(password);
      const newAdmin = new User({
        email: "admin@test.com",
        name: "Admin",
        password: hashedPassword,
        role: "admin",
      });
      await newAdmin.save();
      console.log("admin created.");
    } else {
      console.log("admin already exist");
    }
  } catch (error) {
    console.log(error);
  }
}
export default createAdminAccount;
