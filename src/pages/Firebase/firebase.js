import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAt_RVbFlU6sf7hs-2__x8-AjrGBy81osM",
  authDomain: "quiz-marvel-36d6d.firebaseapp.com",
  projectId: "quiz-marvel-36d6d",
  storageBucket: "quiz-marvel-36d6d.appspot.com",
  messagingSenderId: "665160923743",
  appId: "1:665160923743:web:9115d77b26202ea7bb79ea",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  // inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // déconnexion

  signoutUser = () => this.auth.signOut();

  // Récuperer le mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
