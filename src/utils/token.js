// Import Cookie
import cookie from "./cookie";

// Set Key
const key = "Admin-Token";

// Export Apis
export default {
  get() {
    return cookie.get(key);
  },
  set(token) {
    return cookie.set(key, token);
  },
  remove() {
    return cookie.remove(key);
  }
};
