

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
     var proof=document.forms['myform']['proof'];
     var uploadfile=document.forms['myform']['uploadfile'];

     if (nameValidate(uname))
     {
     }
     if (genderValidate(gender))
     {
     }
     if (addressValidate(address))
     {
     }
     if (ageValidate(age))
     {
     }
     if (emailValidate(email))
     {
     } 
     if (passwordValidate(password))
     {
     }     
     if (numberValidate(number))
     {
     }  
     if (telephoneValidate(telephone))
     {
     } 
     if (qualifyValidate(qualify))
     {
     }   
     if (datetimeValidate(datetime))
     {
     } 
     if (proofValidate(proof))
     {
     }   
     if (fileValidate(uploadfile))
     {
     }
     return false;
}

function nameValidate(uname){
     
     if(uname.value==""){
       document.getElementById('name_div').style.visibility="visible";
       uname.style.border="1px solid red";  
       return false;
     }
     else if(uname.value.length<3){
        document.getElementById('name_div').style.visibility="visible";
        uname.style.border="1px solid red"; 
        return false;
     }else{
        uname.style.border="1px solid green";
        name_div.innerHTML="";
        return true;
     }
}

function genderValidate(gender){
     if(gender.value==""){
       document.getElementById('gender_div').style.visibility="visible";  
       return false;
     }else{
        gender_div.innerHTML="";
        return true;
     }
}
 
function addressValidate(address){    
     if(address.value==""){
       document.getElementById('address_div').style.visibility="visible";
       address.style.border="1px solid red";  
       return false;
     }
     else if(address.value.length<8){
        document.getElementById('address_div').style.visibility="visible";
        address.style.border="1px solid red"; 
        return false;
     }else{
        address.style.border="1px solid green";
        adress_div.innerHTML="";
        return true;
     }
}

function ageValidate(age){
     if(age.value==""){
       document.getElementById('age_div').style.visibility="visible";  
       return false;
     }else{
        age_div.innerHTML="";
        return true;
     }
}

function emailValidate(email){
     if(email.value==""){
       document.getElementById('email_div').style.visibility="visible";
       email.style.border="1px solid red";  
       return false;
     }else{
        email.style.border="1px solid green";
        email_div.innerHTML="";
        return true;
     }
}

function passwordValidate(password){
     if(password.value==""){
       document.getElementById('pswd_div').style.visibility="visible";
       password.style.border="1px solid red";  
       return false;
     }else{
        password.style.border="1px solid green";
        pswd_div.innerHTML="";
        return true;
     }
}

function numberValidate(number){
     if(number.value==""){
       document.getElementById('number_div').style.visibility="visible";
       number.style.border="1px solid red";  
       return false;
     }
     else if(number.value.length<=10){
        document.getElementById('number_div').style.visibility="visible";
        number.style.border="1px solid red"; 
        return false;
     }else{
        number.style.border="1px solid green";
        number_div.innerHTML="";
        return true;
     }
}

function telephoneValidate(telephone){
     if(telephone.value==""){
       document.getElementById('tel_div').style.visibility="visible";
       telephone.style.border="1px solid red";  
       return false;
     }
     else if(telephone.value.length<=10){
        document.getElementById('tel_div').style.visibility="visible";
        telephone.style.border="1px solid red"; 
        return false;
     }else{
        telephone.style.border="1px solid green";
        tel_div.innerHTML="";
        return true;
     }
}

function qualifyValidate(qualify){     
     if(qualify.value==""){
       document.getElementById('qualify_div').style.visibility="visible";
       qualify.style.border="1px solid red";  
       return false;
     }else{
        qualify.style.border="1px solid green";
        qualify_div.innerHTML="";
        return true;
     }
}

function datetimeValidate(datetime){
     if(datetime.value==""){
       document.getElementById('datetime_div').style.visibility="visible";
       datetime.style.border="1px solid red";  
       return false;
     }else{
        datetime.style.border="1px solid green";
        datetime_div.innerHTML="";
        return true;
     }
}

function proofValidate(proof){
     if(proof.value==""){
       document.getElementById('proof_div').style.visibility="visible";  
       return false;
     }else{
        proof_div.innerHTML="";
        return true;
     }
}


function fileValidate(uploadfile){     
     if(uploadfile.value==""){
       document.getElementById('uploadfile_div').style.visibility="visible";
       uploadfile.style.border="1px solid red";  
       return false;
     }else{
        uploadfile.style.border="1px solid green";
        uploadfile_div.innerHTML="";
        return true;
     }
}