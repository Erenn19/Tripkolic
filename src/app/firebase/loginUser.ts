// authService.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const loginUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.emailVerified) {
      console.log("Giriş başarılı!");
    } else {
      console.log("E-posta adresinizi doğrulamanız gerekiyor.");
    }
  } catch (error) {
    console.error("Giriş sırasında bir hata oluştu:", error);
    throw new Error(error as string??"");
  }
};
