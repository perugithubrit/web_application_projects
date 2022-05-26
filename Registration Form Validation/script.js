function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    
    
    }
    function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    
    }
    
    function validateForm(){
    var returnval = true;
    clearErrors();
    
    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    
    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 4){
    
    
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    
    return returnval;
    }
    
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var sp_char = document.getElementById('special_char');
    
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
      
      // Validate length
      if(myInput.value.length >= 4) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
     
          var symbol = /[!\@\#\$\%\^\&\*\|\\\]\}\[\]\{\}\"\"\'\'\;\:\/\?\.\>\,\<\+]/g;
          if(myInput.value.match(symbol)) {  
        special_char.classList.remove("invalid");
        special_char.classList.add("valid");
      } else {
        special_char.classList.remove("valid");
        special_char.classList.add("invalid");
      }
      
    }