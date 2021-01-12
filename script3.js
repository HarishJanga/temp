   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyAvF5O1Im5MFODVa2Vjz8STC5FIpA_jiGk",
    authDomain: "miniproject-cseb17.firebaseapp.com",
    databaseURL: "https://miniproject-cseb17.firebaseio.com",
    projectId: "miniproject-cseb17",
    storageBucket: "miniproject-cseb17.appspot.com",
    messagingSenderId: "575999793252",
    appId: "1:575999793252:web:830f73e2f790ed2c56e771",
    measurementId: "G-116T7JPMMB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
window.onload=function(){
  var x=localStorage.getItem("vhno");
  document.getElementById("wmsg").innerHTML="Hii, "+x;
}
function hello(){
  location.reload();
}
function rating(){
var roll=localStorage.getItem("vhno");
var dccn=document.getElementById("DCCN").value;
var vpcn=document.getElementById("VPCN").value;
var mpi=document.getElementById("MPI").value;
var oe=document.getElementById("OE").value;
var pe=document.getElementById("PE").value;
var review=document.getElementById("Review").value;
var database = firebase.database();
var dbRef = database.ref('student').child(roll); 
dbRef.child("DCCN").set(dccn);
dbRef.child("VPCN").set(vpcn);
dbRef.child("MPI").set(mpi);
dbRef.child("OE").set(oe);
dbRef.child("PE").set(pe);
dbRef.child("REVIEW").set(review);
alert("Feedback successfully submited please remember to signout");
}
function signOut(){
  alert("You have been signed out");
  window.location="index.html";
}