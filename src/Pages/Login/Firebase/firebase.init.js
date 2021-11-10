import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInitilizer = () => {
    initializeApp(firebaseConfig);
}

export default authInitilizer;