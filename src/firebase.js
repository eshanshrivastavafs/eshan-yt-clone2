import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHgvvR_JIsY7YMR3ml3VJRzVw7vuLsRkE",
  authDomain: "eshan-yt-clone.firebaseapp.com",
  projectId: "eshan-yt-clone",
  storageBucket: "eshan-yt-clone.appspot.com",
  messagingSenderId: "93583146064",
  appId: "1:93583146064:web:172d0c77181944d4b7a555",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
