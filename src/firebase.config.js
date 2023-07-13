import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDPlcpb2pcmpavzV6VSxRdYId5B2MZqVEM",
    authDomain: "multi-26646.firebaseapp.com",
    projectId: "multi-26646",
    storageBucket: "multi-26646.appspot.com",
    messagingSenderId: "951573011811",
    appId: "1:951573011811:web:3d78c4fe8fec2b1d434756"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;