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
        
        
        
          const auth = firebase.auth();
  
  
          function signOut(){
              auth.signOut();
             alert("Signed Out");
             window.location="index.html";
              
          }
  
          function createUser(){
            let hno=document.getElementById('hno').value;
            let name=document.getElementById('name').value;
            let branch=document.getElementById('branch').value;
            let year=document.getElementById('year').value;
          let dbref=firebase.database().ref().child('student');
          dbref.child(hno).set({
            hno:hno,
            name:name,
            branch:branch,
            year:year
          });
          alert("user created succesfully");
          }
  
          function deleteaUser(){
            console.log("working");
            let hno=document.getElementById('dlt').value;
            let dbref=firebase.database().ref("student/"+hno);
            dbref.remove();
            alert(hno+" deleted succesfully");
          }
  
          function updateUser(){
            let hnon=document.getElementById('hnon').value;
            let namen=document.getElementById('namen').value;
            let branchn=document.getElementById('branchn').value;
            let yearn=document.getElementById('yearn').value;
            let dbref=firebase.database().ref("student/"+hnon);
            dbref.update({
              name:namen,
              branch:branchn,
              year:yearn
            });
            alert("details updated succesfully");
          }
  
          function Clear(){
            location.reload();
          }
  
          function createFaculty(){
          //  console.log("cf working");
          let fec=document.getElementById('fec').value;
          let fn=document.getElementById('fn').value;
          let fs=document.getElementById('fs').value;
          let dbref=firebase.database().ref().child('faculty');
          dbref.child(fn).set({
            mail:fec,
            subject:fs
          });
          alert("user created succesfully");
          }
        
          function deleteFaculty(){
            console.log("working");
            let fed=document.getElementById('fed').value;
            let dbref=firebase.database().ref("faculty/"+fed);
            dbref.remove();
            alert(fed+" deleted succesfully");
          }
  
          function updateFaculty(){
            let ref=document.getElementById('ref').value;
            let ne=document.getElementById('ne').value;
            let ns=document.getElementById('ns').value;
            let dbref=firebase.database().ref("faculty/"+ref);
            dbref.update({
             mail:ne,
             subject:ns
            });
            alert("details updated succesfully");
          }
  
          function test(){
            window.location="madmin.html";
          }
  
          