// Email Rquirements

var myNumber = document.getElementById("phone-number");


myNumber.onfocus = function() {
    document.getElementById("message2").style.display = "block";
  }

myNumber.onblur = function() {
    document.getElementById("message2").style.display = "none";
  }




// Password Requirements

var myPassword = document.getElementById("login-password");

myPassword.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

myPassword.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
   

myPassword.onkeyup = function() {  

  if(myPassword.value.length < 5 || myPassword.value.length > 25) {

}

}


function passvalues(){
  var slnumber = document. getElementById("phone-number").value;
  localStorage.setItem("numvalue", slnumber);
  return false;

}

function validation(){

  var myNumber = document.getElementById("phone-number").value;
  var myPassword = document.getElementById("login-password").value;

 
    if (myNumber > 0){
        if (myNumber.startsWith('0878')){
           
            if(myNumber.length == 12 && !isNaN(myNumber)){
            
                if(myPassword.length > 5 && myPassword.length < 25){
            
                     $("#login-form").attr("action", "home.html")
                     return true;                         
            }
            else{  
                alert ("Password must consist of 5 to 25 characters");
                }
            }
            else{
          
            alert("Number must consist of 12 digits");
            }
        }
        else{
        
        alert("Number must start with 0878");
        }
    }
    else{
        alert("Must be filled with numbers only")
    }
    
    return false;
  }



// Backup


    // if(isNaN(myNumber)&&!myNumber.startsWith("0878")) {

    //   alert("Please Match The Requirments");
    //   myNumber.focus();
    //   return false; 

    // }
      // if(!myNumber.startsWith("0878")){

      //   alert("Please Match The Requirments");
      // // document.form.number.focus();
      //   myNumber.focus();
      //   return false;
      // }
      
    
    


    // if(!myNumber.startsWith("0878")){
    //     alert("Numbers Must Start With 0878");
    //     //  document.form.number.focus();
    //     return false;
    // }

    // if(myPassword == ""){
    //   alert("Password Must be Filled");
    //   document.form.password.focus();
    //   return false;
    // }

    // if(myPassword.length <5 || myPassword.length > 25){
    //     alert("Password must consist of 5  and less than 25 characters");
    //     document.form.password.focus();
    //     return false;
    //   }

  // }
