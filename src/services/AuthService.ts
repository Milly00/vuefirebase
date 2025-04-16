import { Ref, ref } from "vue";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

export default class AuthServices {
  private jwt: Ref<string>;
  private error: Ref<string>;
  private auth = getAuth();
  private provider = new GoogleAuthProvider();

  constructor() {
    this.jwt = ref("");
    this.error = ref("");
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }
  getError(): Ref<string> {
    return this.error;
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: { user: any }) => {
        // Signed in
        const user = userCredential.user;
        this.showSuccess(
          "Inicio éxitoso!",
          "Ha iniciado sesión de manera éxitosa."
        );
        // ...
      })
      .catch((error: { code: any; message: any }) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        this.showError(errorCode, errorMessage);

      });
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        this.showSuccess(
          "Registro éxitoso!",
          "Se ha registrado de manera éxitosa."
        );
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        this.showError(errorCode, errorMessage);

      });
  }

  resetPassword(newPassword: string) {
    const user = this.auth.currentUser;

    if (user)
      updatePassword(user, newPassword)
        .then(() => {
          // Update successful.
          this.showSuccess(
            "Actualización éxitosa!",
            "Ha actualizado su contraseña de manera éxitosa."
          );
        })
        .catch((error) => {
          // An error ocurred
          // ...
          this.showError('Ha ocurrido un error', 'Lo sentimos ha ocurrido un error.');

        });
  }

  loginWithGoogle() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        this.showSuccess(
          "Inicio éxitoso!",
          "Ha iniciado sesión de manera éxitosa."
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        this.showError(errorCode, errorMessage);
      });
  }

  showSuccess(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  }

  showError(title: string, text: string) {
    Swal.fire({
      title: title,
      text: text,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
}
