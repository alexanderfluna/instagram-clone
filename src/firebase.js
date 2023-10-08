import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASOH3Gg06VR8QmYucg8bX7MOgu_Sno1ko",
  authDomain: "instagram-clone-38e55.firebaseapp.com",
  projectId: "instagram-clone-38e55",
  storageBucket: "instagram-clone-38e55.appspot.com",
  messagingSenderId: "492125071696",
  appId: "1:492125071696:web:6899117d1206f38ab86455"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();