function validateform(){
   var uname=document.forms['myform']['uname'];
   var gender=document.forms['myform']['gender'];
   var address=document.forms['myform']['address'];
   var age=document.forms['myform']['age'];
   var email=document.forms['myform']['email'];
   var password=document.forms['myform']['password'];
   var number=document.forms['myform']['number'];
   var telephone=document.forms['myform']['telephone'];
   var qualify=document.forms['myform']['study'];
   var datetime=document.forms['myform']['datetime'];
   var uploadfile=document.forms['myform']['uploadfile'];

   nameValidate(uname);
   genderValidate(gender);
   addressValidate(address);
   ageValidate(age);
   emailValidate(email);
   passwordValidate(password);
   numberValidate(number);
   telephoneValidate(telephone);
   qualifyValidate(qualify);
   datetimeValidate(datetime);
   fileValidate(uploadfile);
   return false;
}

function errorValidate(id){

  document.getElementById(id).style.visibility="visible";
}

function successValidate(id){
  document.getElementById(id).innerHTML="";
}

function nameValidate(uname){
   
   if(uname.value==""){
     errorValidate('name_div');
     uname.style.border="1px solid red";  
     return false;
   }
   else if(uname.value.length<3){
      errorValidate('name_div');
      uname.style.border="1px solid red"; 
      return false;
   }
   else{
      successValidate('name_div');
      uname.style.border="1px solid green";
      return true;
   }
}

function genderValidate(gender){
   if(gender.value==""){
     errorValidate('gender_div');  
     return false;
   }else{
      successValidate('gender_div');
      return true;
   }
}

function addressValidate(address){    
   if(address.value==""){
     errorValidate('address_div');
     address.style.border="1px solid red";  
     return false;
   }
   else if(address.value.length<8){
      errorValidate('address_div');
      address.style.border="1px solid red"; 
      return false;
   }
   else{
      successValidate('address_div')
      address.style.border="1px solid green";
      return true;
   }
}

function ageValidate(age){
   if(age.value==""){
      errorValidate('age_div');
     return false;
   }else{
      successValidate('age_div');
      return true;
   }
}

function emailValidate(email){
   if(email.value==""){
     errorValidate('email_div');
     email.style.border="1px solid red";  
     return false;
   }else{
      successValidate('email_div');
      email.style.border="1px solid green";
      return true;
   }
}

function passwordValidate(password){
   if(password.value==""){
    errorValidate('pswd_div'); 
     password.style.border="1px solid red";  
     return false;
   }else{
      successValidate('pswd_div');
      password.style.border="1px solid green";
      return true;
   }
}

function numberValidate(number){
   if(number.value==""){
     errorValidate('number_div');
     number.style.border="1px solid red";  
     return false;
   }
   else{
      successValidate('number_div');
      number.style.border="1px solid green";
      return true;
   }
}

function telephoneValidate(telephone){
   if(telephone.value==""){
     errorValidate('tel_div');
     telephone.style.border="1px solid red";  
     return false;
   }
   else{
      successValidate('tel_div');
      telephone.style.border="1px solid green";
      return true;
   }
}

function qualifyValidate(qualify){     
   if(qualify.value==""){
     errorValidate('qualify_div');
     qualify.style.border="1px solid red";  
     return false;
   }else{
      successValidate('qualify_div');
      qualify.style.border="1px solid green";
      return true;
   }
}

function datetimeValidate(datetime){
   if(datetime.value==""){
     errorValidate('datetime_div');
     datetime.style.border="1px solid red";  
     return false;
   }else{
      successValidate('datetime_div');
      datetime.style.border="1px solid green";
      return true;
   }
}


function fileValidate(uploadfile){     
   if(uploadfile.value==""){
     errorValidate('uploadfile_div');
     uploadfile.style.border="1px solid red";  
     return false;
   }else{
      successValidate('uploadfile_div');
      uploadfile.style.border="1px solid green";
      return true;
   }
}