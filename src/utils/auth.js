import jwt from "jsonwebtoken";
import { getToken } from "./tokenStorage";

// Use the `jwt.verify` method with a callback to handle environments without Node.js 'crypto' module
/*export function verifyToken() {
  return new Promise((resolve, reject) => {
    try {
      const token = getToken();
      if (!token) {
        console.error("No token found");
        return resolve(false);
      }
      const secretKey = process.env.JWT_SECRET_KEY;
      // Check if the environment supports the 'crypto' module
      if (!jwt.verify) {
        console.error(
          "Token verification failed: The edge runtime does not support Node.js 'crypto' module."
        );
        return resolve(false);
      }
      jwt.verify(token, secretKey, (error, decoded) => {
        if (error) {
          console.error("Token verification failed:", error.message);
          return resolve(false);
        }
        console.log(decoded);
        return resolve(!!decoded);
      });
    } catch (error) {
      console.error("Token verification failed:", error.message);
      return resolve(false);
    }
  });
}*/
