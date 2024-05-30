import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARlfu5lUy1WQn3L5UmqxQSeG-Z_4XCCs0",
  authDomain: "dropbox-clone-aff64.firebaseapp.com",
  projectId: "dropbox-clone-aff64",
  storageBucket: "dropbox-clone-aff64.appspot.com",
  messagingSenderId: "43081531155",
  appId: "1:43081531155:web:7601351dc2ef8a5790a4e6",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
