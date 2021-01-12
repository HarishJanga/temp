var firebaseConfig = {
    apiKey: "AIzaSyAS0OQtH-KB8b4X4OcdIeogRXmfOelWx4o",
    authDomain: "form-a5ec9.firebaseapp.com",
    databaseURL: "https://form-a5ec9.firebaseio.com",
    projectId: "form-a5ec9",
    storageBucket: "form-a5ec9.appspot.com",
    messagingSenderId: "138028896373",
    appId: "1:138028896373:web:dfac61ae6717b4d514a83c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  var database = firebase.database();
  var dbRef = database.ref('faculty');  
  
    function login(){
      console.log("working");
      var uname=document.getElementById("uname").value;
      localStorage.setItem("fname",uname);
      var pass=document.getElementById("pass").value;
      if(uname==""||pass==""){
        alert("These fields are manidatory");
      }
      else{
      dbRef.once('value',function(snapshot){
        snapshot.forEach(function(childsnapshot){
        var Roll=childsnapshot.child("mail").val();
       if(pass==Roll){
        window.location='faculty.html';
       }
       else{
          //msg
      }
        });
        });
      }
     }
     window.onload=function(){
      window.avg();
     }


  var dbref1= database.ref('student');
  var count_1=0;
  var count_2=0; 
  var count_3=0; 
  var count_4=0; 
  var count_5=0; 
  var avg_vpcn=0;
  var count_vpcn=0;
  var rate_vpcn=0;
  
  function avg(){
    var fname = localStorage.getItem("fname");
    var pref=database.ref('faculty/'+fname);
    var cref=pref.child('subject');
    cref.once("value",function (snapshot) {
      var csub=snapshot.val();
      console.log(csub);

   dbref1.once('value',function(snapshot){
   snapshot.forEach(function(childsnapshot){
   var vpcn=childsnapshot.child(csub).val();
   count_vpcn++;
   rate_vpcn=rate_vpcn+vpcn;
   if(vpcn==5){
       count_5++;
   }
   else if (vpcn==4) {
       count_4++;
       
   } 
   else if(vpcn==3){
       count_3++;
   }
   else if (vpcn==2) {
       count_2++;
       
   } 
   else if(vpcn==1){
       count_1++;
   }
  });
  avg_vpcn=((count_1)+(count_2*2)+(count_3*3)+(count_4*4)+(count_5*5))/(count_5+count_4+count_3+count_2+count_1);
  console.log(avg_vpcn);
});
  });
  }
  
  
  
  /*code here*/
  
  function drawchart(){
    var count_1=this.count_1;
    var count_2=this.count_2;
    var count_3=this.count_3;
    var count_4=this.count_4;
    var count_5=this.count_5;
    var data = google.visualization.arrayToDataTable([
        ['Task', 'feedback report'],
        ['5 star', count_5],
        ['4 star', count_4],
        ['3 star', count_3],
        ['2 star', count_2],
        ['1 star', count_1]
      ]);
      
        // Optional; add a title and set the width and height of the chart
        var options = {'title':'Feedback Report Generated', 'width':750, 'height':900};
      
        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
        chart.draw(data, options);
   }

   function signOut(){
     alert("You have been signed out");
     window.location="index.html";
   }

  