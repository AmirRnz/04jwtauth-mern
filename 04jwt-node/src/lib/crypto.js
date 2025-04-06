import crypto from "crypto";

export const hashPassword = (password, saltRounds = 10) => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(saltRounds).toString("hex"); // Generate salt
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString("hex")}`); // Store salt & hash together
    });
  });
};

export const comparePasswords = (password, storedHash) => {
  return new Promise((resolve, reject) => {
    const [salt, key] = storedHash.split(":"); // Extract salt
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString("hex")); // Compare hashes
    });
  });
};

// async function test() {
//   const password = "mySecurePassword";

//   const hashedPassword = await hashPassword(password);
//   console.log("Hashed:", hashedPassword);

//   const isMatch = await comparePasswords(password, hashedPassword);
//   console.log("Match:", isMatch); // Should be true
// }
