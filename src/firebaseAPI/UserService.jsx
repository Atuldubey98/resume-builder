import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import connectFirebase from "./connectFirebase";
class UserService {
  static async register(email, password) {
    try {
      await createUserWithEmailAndPassword(
        connectFirebase.auth,
        email,
        password
      );
    } catch (error) {
      throw error;
    }
  }
  static async login(email, password) {
    try {
      await signInWithEmailAndPassword(connectFirebase.auth, email, password);
    } catch (error) {
      throw error;
    }
  }
  static async logout() {
    try {
      await signOut(connectFirebase.auth);
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
