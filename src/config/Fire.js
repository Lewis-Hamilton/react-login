import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC1OjKmM_qNVpYYM2g7_HsNrF_FKCzETvE",
  authDomain: "react-login-c3239.firebaseapp.com",
  databaseURL: "https://react-login-c3239.firebaseio.com",
  projectId: "react-login-c3239",
  storageBucket: "",
  messagingSenderId: "142427030988",
};
const fire = firebase.initializeApp(config);
export default fire;