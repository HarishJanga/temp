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
        
      
      
      
        function myFunction(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("New Admin User Created");
        }
        
        
        
