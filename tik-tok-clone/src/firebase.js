import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCHG40bWy6QeWO9EczvFxZe6QDA51Ugs1U",
  authDomain: "tik-tok-clone-ba5d1.firebaseapp.com",
  projectId: "tik-tok-clone-ba5d1",
  storageBucket: "tik-tok-clone-ba5d1.appspot.com",
  messagingSenderId: "293372660790",
  appId: "1:293372660790:web:26d4e0602c1489f4965c97",
  measurementId: "G-G29VLN8GBK"
};


const firebaseApp =
firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;