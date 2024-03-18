/* Firebase */

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH_VPNhW46yZQx1QfawidlIJwAAr6hAgY",
  authDomain: "padel-store-5ede4.firebaseapp.com",
  projectId: "padel-store-5ede4",
  storageBucket: "padel-store-5ede4.appspot.com",
  messagingSenderId: "61236125376",
  appId: "1:61236125376:web:db49043906d83d1c0cd725"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
export const db = getFirestore(app);

