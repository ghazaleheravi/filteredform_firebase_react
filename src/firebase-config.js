import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAysAyw-gpRn0Ej7YCuEIYLdNYViWBqKTA",
  authDomain: "magnify-access-challenge.firebaseapp.com",
  projectId: "magnify-access-challenge",
  storageBucket: "magnify-access-challenge.appspot.com",
  messagingSenderId: "109009147925",
  appId: "1:109009147925:web:6262d8a6dd0b9f2796161c",
  measurementId: "G-ETYJHMRQCM",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);