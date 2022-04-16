
var signupData=[]
if(localStorage.getItem("signupData")===null){
signupData=[]
}else {
signupData=JSON.parse(localStorage.getItem("signupData"))
}


var signupobj={
  number:123456897,
  email:"email@email.com",
  fname:"first",
  lname:"last"
  
  }
  signupData.push(signupobj)
  localStorage.setItem("signupData",JSON.stringify(signupData))





 
 var signupData=JSON.parse(localStorage.getItem("signupData"))
 var signUp=document.querySelector("#signUp");
var Sotp = document.querySelector("#Sotp");
var Saddress=document.querySelector("#Saddress")
var Semail =document.querySelector("#Semail");
// var otp=document.querySelector("#otp").value



function closes(){
document.querySelector("#alert0").style.display="none"
document.querySelector("#Sotp").style.display="none";
document.querySelector("#signUp").style.display="none";
document.querySelector("#Saddress").style.display="none";
document.querySelector("#Semail").style.display="none";
  document.querySelector("#alert1").style.display="none"
document.querySelector("#alert2").style.display="none"
// document.querySelector("alert5").style.display="none"
}

// function signup(){
// signUp.style.display="block"
// }


function signin(){
var mobile=document.querySelector("#mobile")
if(mobile.value!=""){
  document.querySelector("#signUp").style.display="none";
  document.querySelector("#Sotp").style.display="block";

document.querySelector("#alert0").style.display="none"
}
else{
  
  document.querySelector("#alert0").style.display="block"

}


}


function skip(){

document.querySelector("#alert3").style.display="none"
Semail.style.display="none";
Saddress.style.display="block"
}






function otpsignin(){
    // e.preventDefault();
// console.log(1)

var otp=document.querySelector("#otp").value
var mobile=document.querySelector("#mobile").value
var Semail =document.querySelector("#Semail");
var Sotp = document.querySelector("#Sotp");

signupData.forEach(function(element) {
  if(otp=="1234" && mobile==element.number){
  // alert("Singin successfull")
  Sotp.style.display="none";
   Semail.style.display="none"
}
else if(otp=="1234" && mobile!=element.number){
  // alert("OTP Verified")
  Semail.style.display="block"


}
else if(otp==""){
  document.querySelector("#alert1").style.display="block"
  document.querySelector("#alert2").style.display="none"

}
else if(otp!="1234") {
  document.querySelector("#alert2").style.display="block"
  document.querySelector("#alert1").style.display="none"
}


});

}








function proceed(){
var email=document.querySelector("#email").value;
if(email!=""){
document.querySelector("#Sotp").style.display="none";
document.querySelector("#signUp").style.display="none";
document.querySelector("#Saddress").style.display="block";
document.querySelector("#Semail").style.display="none"; 

}else {
  document.querySelector("#alert3").style.display="block"

}

}



function goback(){
  document.querySelector("#Sotp").style.display="none";
document.querySelector("#signUp").style.display="none";
document.querySelector("#Saddress").style.display="none";
document.querySelector("#Semail").style.display="block"; 


}
console.log(goback)









var signupData=[]
if(localStorage.getItem("signupData")===null){
signupData=[]
}else {
signupData=JSON.parse(localStorage.getItem("signupData"))
}

function addressproceed(){
  document.querySelector("#Sotp").style.display="none";
document.querySelector("#signUp").style.display="none";
document.querySelector("#Saddress").style.display="none";
document.querySelector("#Semail").style.display="none"; 

alert("Sign Up Successfull")
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


// console.log(signin)

function demosign(){
    event.preventDefault()
document.querySelector("#popup").style.display="block";
// document.querySelector("#signUp").style.display="block"
document.querySelector("#popup").innerHTML=`<div id="signUp">
<div>
  <h1>Sign up or Sign in</h1>
  <p
  id="com">Enjoy the convenience of a single account across all participating brands</p>
  <label>Mobile Number</label>
  <input type="tel" id="mobile" placeholder="Enter your mobile number"/>
  <div id="alert0">please enter mobile number</div>
  <p>By creating your account you agree to our <a>Terms and Conditions</a></p>
 <div id="hrtag"></div>
  <button id="continue"onclick="signin()">CONTINUE</button>
  <button id="close" onclick="closes()">✕</button>
</div>

</div>


<div id="Sotp">
<div> 
  <h1>Sign up or Sign in</h1>
  <p
  id="com">Enjoy the convenience of a single account across all participating brands</p>
  <label>Verify with OTP</label>
  
  <p id="changeNum">sent to +91<a>change?</a></p>
  <input type="tel" id="otp" placeholder=""/>
  <div id="alert1">plese enter the OTP</div> 
  <div id="alert2">plese enter currect OTP</div>
  <p>We've sent your code. Try again in --</p>
  <div id="otphrtag"></div>
  <button id="close" onclick="closes()">✕</button>
  
  <button id="otpcontinue" onclick="otpsignin()">CONTINUE</button>

 
</div>

</div>



<div id="Semail">
<div>
  <h1>Link your account</h1>
  <p>Existing user please login to your account to link your account to your phone number. it's one life time process</p>
  <input type="email" id="email" placeholder="Your Email"/>
  <div id="alert3">Please enter the Email</div>
  <button id="proceed" onclick="proceed()" >PROCEED</button>
  <button id="skip" onclick="skip()">Skip</button>
  
</div>

</div>




<div id="Saddress">
<div>
  <button id="close"  onclick="closes()">✕</button>
  <h1>How do we address you?</h1>
  <div>
    <input type="text" id="fname" placeholder="First Name"/>
   
  <input type="text" id="lname" placeholder="Last Name"/>
 
  </div> 
  <!-- <div id="alert5">Please fill the details</div>  -->
<div id="Sadcheck">
  <div><input type="checkbox" /> </div>
  <div><p>Enroll me for Landmark Rewards</p></div>
</div>

  <p>By creating your account you agree to our <a>Term and Conditions</a></p>
  <div id="ahrtag"></div>
  <div><button id="goback" onclick="goback()" >GO BACK</button>
    <button id="addressproceed" onclick="addressproceed()" >PROCEED</button></div>
</div>

</div>



`
}