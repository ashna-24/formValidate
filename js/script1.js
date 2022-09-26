
function validateform(){
   var uname=document.getElementById("uname").value;
   if(uname=="")
   {
     document.getElementById('name_div').innerHTML="Please enter your name";
     document.getElementById('name_div').style.color="red";
     uname.style.color="1px solid red";
     return true;
     }
    else{
     document.getElementById('name_div').innerHTML=""; 
     return false;
     }
}