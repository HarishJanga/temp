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
    
  var database = firebase.database();
  var dbRef = database.ref('student');  
  
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        let latitude=position.coords.latitude;
        let longitude=position.coords.longitude;
        let lat,long;
        lat=latitude.toFixed(1);
        long=longitude.toFixed(1);
        console.log(lat,long);
        if(lat==17.3 && long==78.6){
          document.getElementById("mssg").innerHTML="you are in college premises";
          $('.btn').prop('disabled', false);
        }
        else{
          document.getElementById("mssg").innerHTML="you are not in college premises";
          $('.btn').prop('disabled', true);
        }
      });
    }
    function login(){
      console.log("i am alive");
      var Rollnumber=document.getElementById("Rollnumber").value;
      if(Rollnumber==""){
        document.getElementById("msg").innerHTML="This field can't be empty!!";
      }
      else{
      dbRef.once('value',function(snapshot){
        snapshot.forEach(function(childsnapshot){
        var Roll=childsnapshot.child("hno").val();
       if(Rollnumber==Roll){
         localStorage.setItem("vhno",Rollnumber);
        window.location='student.html';
       }
       else{
         document.getElementById("msg").innerHTML="Invalid Roll Number";
       }
        });
        });
      }
     }