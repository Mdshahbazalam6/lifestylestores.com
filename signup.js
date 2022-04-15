var signupData=JSON.parse(localStorage.getItem("signupData"))
    var signUp=document.querySelector("#signUp");
   var Sotp = document.querySelector("#Sotp");
   var Saddress=document.querySelector("#Saddress")
   var Semail =document.querySelector("#Semail");
   // var otp=document.querySelector("#otp").value



 function closes(){
   // document.querySelector("#alert").style.display="none"
 Sotp.style.display="none";
   signUp.style.display="none";
   Saddress.style.display="none";
   Semail.style.display="none";
 //   document.querySelector("#alert1").style.display="none"
 // document.querySelector("#alert2").style.display="none"
 // document.querySelector("alert5").style.display="none"
 }
 
 function signup(){
   signUp.style.display="block"
 }


 function signin(){
   var mobile=document.querySelector("#mobile")
   if(mobile.value!=""){
     signUp.style.display="none";
   Sotp.style.display="block";
  
   // document.querySelector("#alert").style.display="none"
   }
   else{
     
     // document.querySelector("#alert").style.display="block"

   }
 
 }
 


 function skip(){
 
   // document.querySelector("#alert3").style.display="none"
   Semail.style.display="none";
   Saddress.style.display="block"
 }

  

 // function otpsignin(){
 //   event.preventDefault();
 //   var otp=document.querySelector("#otp").value
 //   var mobile=document.querySelector("#mobile").value
  
 //   signupData.forEach(element => {
 //       if(otp=="1234" && mobile==element.number){
 //         Sotp.style.display="none";
 
 //   window.alert("Login Successfull")
 //       }
 //       else if(otp=="1234" && mobile!=element.number){
 //         Sotp.style.display="none";
 //   signUp.style.display="none";
 //   Saddress.style.display="none";
 //   Semail.style.display="block";
 //       }
 //       else{
 //         window.alert("please enter the OTP")
 //       }
 //   });

   
 // }


 
 function otpsignin(){
  
event.preventDefault()
   var otp=document.querySelector("#otp").value
   var mobile=document.querySelector("#mobile").value
   

   signupData.forEach(element => {
     if(otp=="1234" && mobile==element.number){
     alert("otp veriefied")
     Sotp.style.display="none";
      Semail.style.display="none"
   }else if(otp=="1234" && mobile!=element.number){
     Semail.style.display="block"
   }
   else if(otp==""){
     alert("plese enter the otp")
   }
   else if(otp!="1234") {
     alert("wrong otp")
   }
   

   });

   }
   







// signupData.forEach(function(signup){
//  if(mobile==signup.number ){

// Sotp.style.display="none";
// signUp.style.display="none";
// Semail.style.display="none"
// alert("sign in successfull")
// }else if(mobile!=signup.number){

// Sotp.style.display="none";
// signUp.style.display="none";
// Semail.style.display="block"
// alert("OTP verified successfull")
// }
// else if(otp==""){
//   document.querySelector("#alert1").style.display="block"
//   document.querySelector("#alert2").style.display="none"
// }else if(otp!="1234"){
//   document.querySelector("#alert2").style.display="block"
//   document.querySelector("#alert1").style.display="none"

// }
  



 function proceed(){
   var email=document.querySelector("#email").value;
 
     Sotp.style.display="none";
   signUp.style.display="none";
   Saddress.style.display="block";
   Semail.style.display="none"; 

 }
 
 
 
 function goback(){
   Sotp.style.display="none";
   signUp.style.display="none";
   Saddress.style.display="none";
   Semail.style.display="block";

 }
 








 var signupData=[]
 if(localStorage.getItem("signupData")===null){
   signupData=[]
 }else {
   signupData=JSON.parse(localStorage.getItem("signupData"))
 }

 function addressproceed(){
   
   Sotp.style.display="none";
   signUp.style.display="none";
   Saddress.style.display="none";
   Semail.style.display="none";
window.alert("Sign Up Successfull")
 event.preventDefault()

 var signupobj={
   number:document.querySelector("#mobile").value,
   email:document.querySelector("#email").value,
   fname:document.querySelector("#fname").value,
   lname:document.querySelector("#lname").value

 }
 signupData.push(signupobj);

 localStorage.setItem("signupData",JSON.stringify(signupData))
 
   
  
 }