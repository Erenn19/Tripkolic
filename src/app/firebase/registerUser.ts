// authService.ts
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

export const registerUser = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // E-posta onayı gönder
    await sendEmailVerification(user);
    console.log("E-posta onay linki gönderildi.");
  } catch (error) {
    console.error("Kayıt sırasında bir hata oluştu:", error);
    throw new Error(error as string??"");
  }
};
