
firebase.initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnaKXmYBbZf6iePbYmbyHd9C6Vr5E-ggU",
  authDomain: "instagood-efc41.firebaseapp.com",
  databaseURL: "https://instagood-efc41-default-rtdb.firebaseio.com",
  projectId: "instagood-efc41",
  storageBucket: "instagood-efc41.appspot.com",
  messagingSenderId: "503325761973",
  appId: "1:503325761973:web:b5434852295a16139c79fc"
};

const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
