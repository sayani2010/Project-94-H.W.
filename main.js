
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyACe1fSOj9fyZQRx8oebaylqzapLrd_Isw",
    authDomain: "kwitter-b1f52.firebaseapp.com",
    databaseURL: "https://kwitter-b1f52-default-rtdb.firebaseio.com",
    projectId: "kwitter-b1f52",
    storageBucket: "kwitter-b1f52.appspot.com",
    messagingSenderId: "690994082640",
    appId: "1:690994082640:web:8ccd25db1fc7f9b6723255"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser() {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }