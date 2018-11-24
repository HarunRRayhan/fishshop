import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBHHImCKhZISlOu388izkQifSr--0oACKk",
  authDomain: "test-project-66a0c.firebaseapp.com",
  databaseURL: "https://test-project-66a0c.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
