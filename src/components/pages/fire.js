
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDmPedDTohj6Al3-eDcApc54xsBdjEa2QI",
  authDomain: "rms-system-a21e2.firebaseapp.com",
  projectId: "rms-system-a21e2",
  storageBucket: "rms-system-a21e2.appspot.com",
  messagingSenderId: "126044180629",
  appId: "1:126044180629:web:9de3ada699307f761acb9c"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

