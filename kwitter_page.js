//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAjWIw6U6G1OWPVWGz4KpEMXI5sOAMcTtA",
      authDomain: "kwitter-41534.firebaseapp.com",
      databaseURL: "https://kwitter-41534-default-rtdb.firebaseio.com",
      projectId: "kwitter-41534",
      storageBucket: "kwitter-41534.appspot.com",
      messagingSenderId: "40165184399",
      appId: "1:40165184399:web:b44c58699b47f8faa3b1fa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("theusername");

roomname=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }

getData();

function send()
{
message=document.getElementById("message").value;
firebase.database().ref(roomname).push({
      name:username, message:message, like: 0
});
document.getElementById(Message).value="";
}