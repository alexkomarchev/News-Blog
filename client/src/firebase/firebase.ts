import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFzy2u38N40GPxvbB-82iRE9OGrracEIg",
    authDomain: "only-cd727.firebaseapp.com",
    projectId: "only-cd727",
    storageBucket: "only-cd727.appspot.com",
    messagingSenderId: "274264847620",
    appId: "1:274264847620:web:8c8c57ad2768f3ddcc4c51"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);