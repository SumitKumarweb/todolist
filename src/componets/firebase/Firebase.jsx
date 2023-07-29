import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyClykTaKCDxHmhqfkdNCjx2e8jnqpiwy3s",
  authDomain: "todo-app-1bcf1.firebaseapp.com",
  databaseURL: "https://todo-app-1bcf1-default-rtdb.firebaseio.com",
  projectId: "todo-app-1bcf1",
  storageBucket: "todo-app-1bcf1.appspot.com",
  messagingSenderId: "1095221944907",
  appId: "1:1095221944907:web:fa36f987398d533ef763ce",
  measurementId: "G-BXJE7X1K94"
};

const Firebase = initializeApp(firebaseConfig);

export default Firebase;