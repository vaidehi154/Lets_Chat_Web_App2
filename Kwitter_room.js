user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

var firebaseConfig = {
    apiKey: "AIzaSyD_BlV__Ne5YSPnkTHNL5-9Blk3pswzLtI",
    authDomain: "let-s-chat-web-app-3f303.firebaseapp.com",
    projectId: "let-s-chat-web-app-3f303",
    storageBucket: "let-s-chat-web-app-3f303.appspot.com",
    messagingSenderId: "18700390033",
    appId: "1:18700390033:web:23a31ad3719ee04f833930"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
