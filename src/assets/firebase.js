import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpy8uAuZvdTZagk0-RlJzCAQSCjVzcCMU",
  authDomain: "soluciones-informaticos-rv.firebaseapp.com",
  projectId: "soluciones-informaticos-rv",
  storageBucket: "soluciones-informaticos-rv.appspot.com",
  messagingSenderId: "606019631575",
  appId: "1:606019631575:web:b379fa30fc17aba16d3392",
  measurementId: "G-YNPV0JBHRS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
