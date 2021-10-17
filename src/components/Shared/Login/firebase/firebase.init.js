import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const authInit = () => {
    initializeApp(firebaseConfig);
}
export default authInit;