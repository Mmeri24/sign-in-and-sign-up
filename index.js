var a;
 function passIcon() {
     if (a==1){
        document.getElementById("text").type ="password";
        document.getElementById("pass").src ="images/eye-off.svg";
       
    }
   else {
       document.getElementById("text").type ="text";
       document.getElementById("pass").src ="images/eye-on.svg";
       a=1;
  }
 }

var b;
 function passIcon1() {
     if (b==1){
        document.getElementById("text1").type ="password";
        document.getElementById("pass1").src ="images/eye-off.svg";
       
    }
   else {
       document.getElementById("text1").type ="text";
       document.getElementById("pass1").src ="images/eye-on.svg";
       b=1;
  }
 }
